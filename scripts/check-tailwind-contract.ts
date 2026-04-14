import tokens, { tailwindTheme } from '../src/index';
import { getPathValue, loadContractManifest } from './contract-utils';

const manifest = loadContractManifest();

manifest.requiredOutputs.tailwind.expectations.forEach(({ themePath, tokenPath, transform }) => {
  const themeValue = getPathValue(tailwindTheme, themePath);
  let tokenValue = getPathValue(tokens, tokenPath);

  if (themeValue === undefined) {
    throw new Error(`Tailwind theme is missing expected path: ${themePath}`);
  }

  if (transform === 'firstFontFamily') {
    tokenValue = String(tokenValue)
      .split(',')
      .map((segment) => segment.trim().replace(/^['"]|['"]$/g, ''))
      .filter(Boolean)[0];
  }

  if (themeValue !== tokenValue) {
    throw new Error(`Tailwind theme mismatch for ${themePath}. Expected ${tokenValue}, received ${themeValue}`);
  }
});

console.log('Tailwind contract check passed.');
