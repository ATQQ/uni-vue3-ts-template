const path = require('path')
const vitePath = require.resolve('vite/package.json')
const esbuildPath = path.dirname(vitePath) + '/../esbuild/package.json'
const esbuildVersion = require(esbuildPath).version
console.log('vite dep esbuild version', esbuildVersion);
console.log();
console.log(`pnpm add @esbuild/darwin-x64@${esbuildVersion} -D`);