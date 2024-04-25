/** @type {import("prettier").Config} */
const config = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  importOrderSeparation: true,
  importOrder: ['^[./]'],
}

module.exports = config
