const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addBabelPlugin
} = require("customize-cra");
const path = require("path");

module.exports = override(
  // Antd tree-shaking
  fixBabelImports("antd", {
    libraryDirectory: "es",
    style: "css"
  }),
  // ~ -200Kb without the webpack entry
  addBabelPlugin("recharts"),
  // Antd icon bundle fix
  // https://github.com/ant-design/ant-design/issues/12011#issuecomment-423173228
  addWebpackAlias({
    "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons.js")
  })
);
