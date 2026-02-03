#!/usr/bin/env node

/**
 * GitHub Pages 部署腳本
 * 步驟：
 * 1. 清除 gh-pages 緩存
 * 2. 刪除遠端 gh-pages 分支
 * 3. 刪除本地 gh-pages 分支
 * 4. 刪除 dist 目錄
 * 5. 重新 build
 * 6. 使用 gh-pages 推送
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
const cachePath = path.join(__dirname, 'node_modules', '.cache', 'gh-pages');

function run(cmd, options = {}) {
    try {
        execSync(cmd, { stdio: 'inherit', cwd: __dirname, ...options });
        return true;
    } catch (e) {
        return false;
    }
}

console.log('=== GitHub Pages Deployment ===\n');

// Step 1: 清除 gh-pages 緩存
console.log('[1/6] Clearing gh-pages cache...');
if (fs.existsSync(cachePath)) {
    fs.rmSync(cachePath, { recursive: true, force: true });
    console.log('      Cache cleared.\n');
} else {
    console.log('      No cache found.\n');
}

// Step 2: 刪除遠端 gh-pages 分支
console.log('[2/6] Removing remote gh-pages branch...');
run('git push origin --delete gh-pages', { stdio: 'pipe' });
console.log('      Done.\n');

// Step 3: 刪除本地 gh-pages 分支
console.log('[3/6] Removing local gh-pages branch...');
run('git branch -D gh-pages', { stdio: 'pipe' });
console.log('      Done.\n');

// Step 4: 刪除 dist 目錄
console.log('[4/6] Cleaning dist directory...');
if (fs.existsSync(distPath)) {
    fs.rmSync(distPath, { recursive: true, force: true });
    console.log('      dist removed.\n');
} else {
    console.log('      dist not found.\n');
}

// Step 5: Build
console.log('[5/6] Building project...');
const buildSuccess = run('npx vite build');
if (!buildSuccess && !fs.existsSync(distPath)) {
    console.error('      Build failed!');
    process.exit(1);
}
console.log('      Build complete.\n');

// Step 6: Deploy
console.log('[6/6] Deploying to GitHub Pages...');
const deploySuccess = run('npx gh-pages -d dist');

if (deploySuccess) {
    console.log('\n=== Deployment Successful! ===');
    console.log('URL: https://hughchen2046.github.io/StreetV1/');
    console.log('Please wait 1-2 minutes for GitHub Pages to update.');
    process.exit(0);
} else {
    console.error('\n=== Deployment Failed! ===');
    process.exit(1);
}
