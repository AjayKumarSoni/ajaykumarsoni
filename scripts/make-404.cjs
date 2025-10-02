// Create SPA fallback for GitHub Pages by copying dist/index.html to dist/404.html
// Additionally, mirror to repo root 404.html for setups that serve from repository root
const fs = require('fs');
const path = require('path');

function ensure404(fromIndexPath, to404Path) {
  if (!fs.existsSync(fromIndexPath)) {
    console.warn(`[make-404] Skipped: source not found ${fromIndexPath}`);
    return;
  }
  const html = fs.readFileSync(fromIndexPath, 'utf8');
  fs.writeFileSync(to404Path, html);
  console.log(`[make-404] Wrote ${to404Path}`);
}

try {
  const distDir = path.resolve(__dirname, '..', 'dist');
  const distIndex = path.join(distDir, 'index.html');
  const dist404 = path.join(distDir, '404.html');
  ensure404(distIndex, dist404);

  // Also update repo root 404.html to match the latest build for users committing root as site
  const repoRoot = path.resolve(__dirname, '..');
  const repo404 = path.join(repoRoot, '404.html');
  if (fs.existsSync(distIndex)) {
    const html = fs.readFileSync(distIndex, 'utf8');
    fs.writeFileSync(repo404, html);
    console.log(`[make-404] Wrote ${repo404}`);
  }
} catch (e) {
  console.error('[make-404] Error creating 404.html', e);
  process.exitCode = 1;
}
