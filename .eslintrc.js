module.exports = {
  env: {
    // commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-var": "error",
    "no-unused-vars": ["error", { args: "after-used" }],
    "prefer-const": "error", // 使用let关键字声明的变量，但在初始分配后从未重新分配变量，应改为const声明
    "no-empty-pattern": "error", // 不允许空块语句
    "space-infix-ops": "error", // 强制二元运算符左右各有一个空格
    "no-const-assign": "error", // 不能修改使用const关键字声明的变量
  }
};
