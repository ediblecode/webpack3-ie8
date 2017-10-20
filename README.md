# PoC for using ES6, Flow and Webpack 3 in IE8

> IE8? Are you crazy?

Sadly, some of us still have to use IE8 for production apps. But we still want to use modern tooling. So this repo is an attempt to use ES6, Flow and Webpack in IE8.

## Usage

```sh
npm i
npm start
```

## Notes

- Uses [es3ify](https://github.com/sorrycc/es3ify-loader) as a post loader to convert ES5 to ES3
- Uses [es5-shim](https://github.com/es-shims/es5-shim) from a CDN in the HTML source
- `"loose": true` is needed in *.babelrc* to avoid `Object.defineProperty`
- HMR needs to be turned off (adds `Object.defineProperty` that breaks IE8)
- If you use [UglifyJsPlugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) don't forget the `screw_ie8` option.

## Related reading

- [Getting React and Webpack to Run on IE8 (If You Must)](https://medium.com/react-university/getting-react-to-run-on-ie8-bfc0a3e7543a)
- [webpack2 doesn't support IE8](https://github.com/webpack/webpack/issues/3070)
- [How to tell WebPack Uglify to support IE8](http://johnliu.net/blog/2017/1/how-to-tell-webpack-uglify-to-support-ie8)