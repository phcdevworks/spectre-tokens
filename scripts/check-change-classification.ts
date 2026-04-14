import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { loadContractManifest } from './contract-utils';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');
const changelogPath = join(repoRoot, 'CHANGELOG.md');
const manifest = loadContractManifest();

const contractAuthorityFiles = ['tokens', 'contract.manifest.json', 'README.md', 'src/index.ts', 'src/types.ts', 'src/css.ts'];

const runGit = (args: string[]): string => {
  const result = spawnSync('git', args, {
    cwd: repoRoot,
    encoding: 'utf8'
  });

  if (result.status !== 0) {
    if (result.stderr) process.stderr.write(result.stderr);
    process.exit(result.status ?? 1);
  }

  return result.stdout;
};

const workingTreeChanges = runGit(['diff', '--name-only', 'HEAD', '--', ...contractAuthorityFiles]);
let changedFiles = workingTreeChanges
  .split('\n')
  .map((entry) => entry.trim())
  .filter(Boolean);

if (changedFiles.length === 0) {
  const headCommitChanges = runGit(['diff-tree', '--no-commit-id', '--name-only', '-r', 'HEAD', '--', ...contractAuthorityFiles]);
  changedFiles = headCommitChanges
    .split('\n')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

if (changedFiles.length === 0) {
  console.log('No contract-authority changes detected.');
  process.exit(0);
}

const changelog = readFileSync(changelogPath, 'utf8');
const unreleasedSection = changelog.split('## [Unreleased]')[1]?.split('\n## [')[0] ?? '';
const classificationPattern = new RegExp(
  `${manifest.changeClassification.requiredPrefix}\\s*(${manifest.changeClassification.allowed.join('|')})`,
  'i'
);

if (!classificationPattern.test(unreleasedSection)) {
  throw new Error(
    [
      'Contract-authority changes require a classified changelog note in the Unreleased section.',
      `Expected prefix: ${manifest.changeClassification.requiredPrefix}`,
      `Allowed values: ${manifest.changeClassification.allowed.join(', ')}`,
      `Changed files: ${changedFiles.join(', ')}`
    ].join('\n')
  );
}

console.log('Contract change classification check passed.');
