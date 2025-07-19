const fs = require("fs");
const esbuild = require("esbuild");

const isWatch = process.argv.includes("--watch");

const options = {
  logLevel: "info",
  entryPoints: ["src/app.jsx"],
  bundle: true,
  minify: true,
  format: "cjs",
  sourcemap: false,
  outfile: "public/dist/app.js",
};

if (isWatch) {
  async function watch() {
    let ctx = await esbuild.context(options);
    await ctx.watch();
    console.log("Watching...");
  }
  watch();
} else {
  const res = esbuild.buildSync({...options, metafile: true});
  if (res.metafile) {
    fs.writeFileSync("public/dist/metafile.json", JSON.stringify(res.metafile));
  }
}
