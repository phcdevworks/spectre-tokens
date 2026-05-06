import { spawnSync } from 'node:child_process';
import type { SpawnSyncOptions, SpawnSyncReturns } from 'node:child_process';

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const baseEnv: NodeJS.ProcessEnv = { ...process.env };

if (process.platform !== 'win32') {
  baseEnv['TMPDIR'] ??= '/tmp';
  baseEnv['TMP'] ??= '/tmp';
  baseEnv['TEMP'] ??= '/tmp';
}

function run(command: string, args: string[], options: SpawnSyncOptions = {}): SpawnSyncReturns<string> {
  const result = spawnSync(command, args, {
    stdio: 'pipe',
    encoding: 'utf8',
    env: baseEnv,
    ...options,
  });

  if (result.error) {
    throw result.error;
  }

  return result as SpawnSyncReturns<string>;
}

function runOrExit(command: string, args: string[], options: SpawnSyncOptions = {}): SpawnSyncReturns<string> {
  const result = run(command, args, options);

  if (result.stdout) {
    process.stdout.write(result.stdout);
  }

  if (result.stderr) {
    process.stderr.write(result.stderr);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }

  return result;
}

runOrExit(npmCommand, ['run', 'build']);

const status = run('git', ['status', '--porcelain', '--', 'dist']);

if (status.status !== 0) {
  if (status.stdout) {
    process.stdout.write(status.stdout);
  }

  if (status.stderr) {
    process.stderr.write(status.stderr);
  }

  process.exit(status.status ?? 1);
}

if (status.stdout.trim()) {
  console.error('dist artifacts are out of sync with the committed build output.');
  console.error('Run `npm run build` and commit the updated dist files.');
  process.stdout.write(status.stdout);
  process.exit(1);
}

console.log('dist artifacts are in sync.');
