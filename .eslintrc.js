module.exports = {
  root: true,
  env: { node: true, 'vue/setup-compiler-macros': true },
  // https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
  parser: 'vue-eslint-parser', // 所有文件的入口解析器
  parserOptions: {
    parser: '@typescript-eslint/parser', // ts解析器，vue解析器在遇到ts时使用ts解析器
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    // 使用插件中的configs 配置，里面含有rules，env等
    // https://github.com/vuejs/eslint-plugin-vue/blob/44ff0e02cd0fd08b8cd7dee0127dbb5590446323/docs/user-guide/README.md#conflict-with-prettier
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended', // // eslint-config-prettier 关闭与prettier冲突的规则，prettier接管代码风格。其依赖需要eslint-plugin-prettier
  ],
  rules: {
    'no-undef': 0,

    'vue/script-setup-uses-vars': 2,
    'vue/no-unused-vars': 0,
    'vue/multi-word-component-names': 0,

    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/no-namespace': 1,
    // 配置prettier规则
  },
}
