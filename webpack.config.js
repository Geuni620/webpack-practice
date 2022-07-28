const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/, // .css 확장자로 끝나는 모든 파일
        use: ["style-loader", "css-loader"], // style-loader를 앞에 추가한다
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // .png 확장자로 마치는 모든 파일
        loader: "url-loader", // 파일 로더를 적용한다
        options: {
          publicPath: "./dist/", // prefix를 아웃풋 경로로 지정
          name: "[name].[ext]?[hash]", // 파일명 형식
          limit: 20000, // 20kb 미만 파일만 data url로 처리
        },
      },
    ],
  },
};
