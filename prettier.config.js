// @ts-check

/** @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  // Standard prettier options
  singleQuote: false,
  semi: true,
  // Since prettier 3.0, manually specifying plugins is required
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  // This plugin's options
  importOrder: [
    "^@core/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@/app/(.*)$",
    "^@/components/(.*)$",
    "^@/libs/(.*)$",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
