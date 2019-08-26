import resolve from 'rollup-plugin-node-resolve';
import { inlineLitElement } from 'rollup-plugin-inline-lit-element'

const dependencies = Object.keys(require("./package.json").dependencies);

export default {
  // If using any exports from a symlinked project, uncomment the following:
  // preserveSymlinks: true,
	input: ['src/heimr-star-struck.js'],
	output: {
		file: 'heimr-star-struck.js',
		format: 'es',
		sourcemap: true
	},
	plugins: [
    inlineLitElement(),
    resolve(),
  ],
  external: dependencies
};
