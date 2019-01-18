# rollup-commonjs-babel-issue
Minimal example showing issues with Rollup and the CommonJS and Babel plugins

The issue is that `index.js` contains an ES6 class and with the transpilation
taking place, the CommonJS plugin no longer is able to process the `require()`
call (`MyComponent.js` is
never searched for).

You can inspect `output.js` and see the `require("./MyComponent")` is still in
there verbatim.

If `@babel/preset-env` weren't used, the ES6 class would not be transpiled and
the problem goes away. Similary, if a functional component had been used
instead of a class component, the problem goes away.

If you want to recreate `output.js`, just run `yarn && yarn start`.
