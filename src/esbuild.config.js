const path = require('path')
const esbuild = require('esbuild')
const {  globSync }  = require("glob");

const entryPoints = globSync("./**/lambdas/*.ts", { ignore: "node_modules/**"})
const outDir = `dist`

console.log(entryPoints)
require('esbuild').build({
    entryPoints: entryPoints,
    entryNames: '[dir]/[name]',
    outbase:'.',
    bundle: true,
    minify: process.env.NODE_ENV === "dev" ? false : true,
    sourcemap: false,
    outdir: path.join(__dirname, outDir),
    platform: 'node',
    mainFields: ["module", "main"],
    write: true    
}).catch(() => process.exit());



