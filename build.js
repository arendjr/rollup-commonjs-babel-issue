const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");
const rollup = require("rollup");

const inputOptions = {
    input: "./index.js",
    plugins: [
        resolve(),
        babel(),
        commonjs(),
    ],
};

const outputOptions = {
    file: `output.js`,
    format: "cjs",
};

(async function() {
    const bundle = await rollup.rollup(inputOptions);
    await bundle.write(outputOptions);
})();
