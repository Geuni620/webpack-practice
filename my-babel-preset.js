module.exports = function myBabelPreset() {
  return {
    plugins: [
      "@babel/plugin-transform-block-scoping", // const -> var
      "@babel/plugin-transform-arrow-functions", // arrow function transfer
      "@babel/plugin-transform-strict-mode", // 코드 상단에 use strict 들어감
    ],
  };
};
