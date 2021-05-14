import {
  name,
  version,
  license,
  dependencies
} from "./package.json";

const files = [
  "utils",
  "index",
  "reset",
  "set-graphic",
  "enable-color"
];

export default files.map(file => ({
  input: `src/${file}.js`,
  external: [...files.map(item => `./${item}`), ...Object.keys(dependencies)],
  output: {
    format: "cjs",
    file: `lib/${file}.js`,
    exports: "auto",
    banner: "/**\n"
    + ` * @module ${name}/${file}\n`
    + ` * @verion ${version}\n`
    + ` * @license ${license}\n`
    + " */\n"
  }
}));

