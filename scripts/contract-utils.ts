import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const manifestPath = join(__dirname, '../contract.manifest.json');

export interface TailwindExpectation {
  themePath: string;
  tokenPath: string;
  transform?: 'firstFontFamily';
}

export interface ContractManifest {
  version: number;
  publicNamespaces: string[];
  requiredOutputs: {
    js: {
      rootExports: string[];
      rootTypeExports: string[];
      requiredPaths: string[];
      requiredStringPaths: string[];
      spaceLinkedLayoutPaths: string[];
      bannedPaths: string[];
    };
    css: {
      requiredVariables: string[];
      requiredDarkModeVariables: string[];
    };
    tailwind: {
      expectations: TailwindExpectation[];
    };
  };
  protectedSemanticGroups: string[];
  docContract: {
    requiredSectionMarkers: string[];
  };
  changeClassification: {
    allowed: string[];
    requiredPrefix: string;
  };
}

let cachedManifest: ContractManifest | undefined;

export function loadContractManifest(): ContractManifest {
  if (cachedManifest) {
    return cachedManifest;
  }

  cachedManifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as ContractManifest;
  return cachedManifest;
}

export const getPathValue = (source: unknown, path: string): unknown =>
  path.split('.').reduce<unknown>((acc, key) => {
    if (Array.isArray(acc) && /^\d+$/.test(key)) {
      return acc[Number(key)];
    }
    if (acc && typeof acc === 'object') {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, source);
