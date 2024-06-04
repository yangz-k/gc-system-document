/*
 * @Descripttion:
 * @version:
 * @Author: licz
 * @Date: 2021-01-12 10:59:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-03 11:14:05
 */
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
        modules: "commonjs", // 或者使用false, 'amd', 'systemjs', 'umd', 'es6', 'auto', 'cjs', 'system', 'jsonp', 'esm', 'fesm'
      },
    ],
  ],
};
