import resolve from "rollup-plugin-node-resolve";

const dependencies = Object.keys(require("./package.json").dependencies);

export default {
  // If using any exports from a symlinked project, uncomment the following:
  // preserveSymlinks: true,
  input: ["src/heimr-star-struck-rating.js"],
  output: {
    file: "heimr-star-struck-rating.js",
    format: "es",
    sourcemap: true
  },
  plugins: [resolve()],
  external: dependencies
};
