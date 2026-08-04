import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(repoRoot, 'dist');
const rootIndex = join(repoRoot, 'index.html');
const rootAssets = join(repoRoot, 'assets');

if (!existsSync(distDir)) {
  throw new Error('dist folder was not found. Run vite build before publishing.');
}

rmSync(rootIndex, { force: true });
rmSync(rootAssets, { recursive: true, force: true });

mkdirSync(repoRoot, { recursive: true });
cpSync(join(distDir, 'index.html'), rootIndex);
cpSync(join(distDir, 'assets'), rootAssets, { recursive: true });
