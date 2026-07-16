import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');
const siblingsRoot = resolve(repoRoot, '..');

// Sibling repos that depend on @phcdevworks/spectre-tokens, per
// ROADMAP.md Phase 9 P3. Each is validated using its OWN npm run check —
// this script does not reimplement downstream test logic.
const DOWNSTREAM_REPOS = ['spectre-ui', 'spectre-ui-astro', 'spectre-components'];

const fail = (message: string): never => {
  throw new Error(`Downstream compatibility check failed: ${message}`);
};

const run = (command: string, args: string[], cwd: string) => {
  const result = spawnSync(command, args, { cwd, stdio: 'inherit', encoding: 'utf8' });
  if (result.status !== 0) {
    throw new Error(`\`${command} ${args.join(' ')}\` failed in ${cwd} (exit ${result.status})`);
  }
};

console.log('Packing @phcdevworks/spectre-tokens...');
const packResult = spawnSync('npm', ['pack', '--json'], { cwd: repoRoot, encoding: 'utf8' });
if (packResult.status !== 0) {
  fail(`npm pack failed: ${packResult.stderr}`);
}
const [{ filename }] = JSON.parse(packResult.stdout) as Array<{ filename: string }>;
const tarballPath = resolve(repoRoot, filename);

const results: Array<{ repo: string; status: 'passed' | 'failed' | 'skipped'; detail?: string }> = [];

try {
  for (const repoName of DOWNSTREAM_REPOS) {
    const repoPath = join(siblingsRoot, repoName);

    if (!existsSync(repoPath)) {
      results.push({ repo: repoName, status: 'skipped', detail: 'not present on disk' });
      continue;
    }

    console.log(`\n=== ${repoName} ===`);

    const gitStatus = spawnSync('git', ['status', '--porcelain'], { cwd: repoPath, encoding: 'utf8' });
    if (gitStatus.stdout.trim()) {
      results.push({ repo: repoName, status: 'skipped', detail: 'has uncommitted changes — refusing to touch package.json/package-lock.json' });
      continue;
    }

    try {
      run('npm', ['install', tarballPath, '--no-save'], repoPath);
      run('npm', ['run', 'check'], repoPath);
      results.push({ repo: repoName, status: 'passed' });
    } catch (error) {
      results.push({ repo: repoName, status: 'failed', detail: (error as Error).message });
    } finally {
      // Restore the sibling repo to its committed state — this script never
      // leaves package.json/package-lock.json/node_modules modified.
      spawnSync('git', ['checkout', '--', 'package.json', 'package-lock.json'], { cwd: repoPath });
      spawnSync('npm', ['install'], { cwd: repoPath, stdio: 'ignore' });
    }
  }
} finally {
  spawnSync('rm', ['-f', tarballPath]);
}

console.log('\n=== Downstream compatibility summary ===');
for (const { repo, status, detail } of results) {
  console.log(`${status === 'passed' ? '✔' : status === 'skipped' ? '○' : '✖'} ${repo}: ${status}${detail ? ` (${detail})` : ''}`);
}

const failed = results.filter((r) => r.status === 'failed');
if (failed.length > 0) {
  fail(`${failed.length} downstream repo(s) failed against the packed candidate: ${failed.map((r) => r.repo).join(', ')}`);
}

console.log('\nDownstream compatibility check passed.');
