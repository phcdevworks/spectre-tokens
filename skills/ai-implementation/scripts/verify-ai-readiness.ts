import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * verify-ai-readiness.ts
 * Checks the codebase for patterns that hinder AI agent autonomy and type safety.
 */

const TARGET_DIRS = ['src', 'scripts'];
const FORBIDDEN_PATTERNS = [
  { regex: /: any([,;\n\s]|$)/g, message: 'Usage of "any" type detected.' },
  { regex: /\.js$/g, message: 'JavaScript file found (should be TypeScript).' },
];

function scanDirectory(dir: string): string[] {
  const issues: string[] = [];
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      issues.push(...scanDirectory(fullPath));
    } else if (stats.isFile()) {
      const content = readFileSync(fullPath, 'utf8');

      if (entry.endsWith('.js')) {
        issues.push(`[FILE] ${fullPath}: JavaScript files are forbidden.`);
      }

      FORBIDDEN_PATTERNS.forEach(pattern => {
        if (pattern.regex.test(content)) {
          issues.push(`[TYPE] ${fullPath}: ${pattern.message}`);
        }
      });
    }
  }
  return issues;
}

console.log('--- Spectre AI Readiness Scan ---');
let totalIssues = 0;

TARGET_DIRS.forEach(dir => {
  const dirPath = join(process.cwd(), dir);
  try {
    const issues = scanDirectory(dirPath);
    issues.forEach(issue => {
      console.error(` [FAIL] ${issue}`);
      totalIssues++;
    });
  } catch (err) {
    console.warn(` [SKIP] Directory ${dir} not found or inaccessible.`);
  }
});

if (totalIssues === 0) {
  console.log('\n✅ Codebase is highly AI-ready! No "any" or JS files detected.');
  process.exit(0);
} else {
  console.error(`\n❌ Found ${totalIssues} issues hindering AI implementation.`);
  process.exit(1);
}
