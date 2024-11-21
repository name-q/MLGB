module.exports = {
  // 继承 react 官方规则
  extends: ["react-app"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true // 开启 jsx 语法
    },
    babelOptions: {
      presets: [
        // 解决页面报错问题
        ["babel-preset-react-app", false],
        "babel-preset-react-app/prod",
      ],
    },
  },

  /* 
  https://eslint.nodejs.cn/docs/latest/rules/
  "off" 或 0 - 关闭规则
  "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  */
  rules: {
    "no-var": 2,
  }
};