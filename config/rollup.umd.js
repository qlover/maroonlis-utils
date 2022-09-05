import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import autoExternal from 'rollup-plugin-auto-external';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: './src/index.ts',
  output: {
    // file: pkg.main,
    dir: 'umd',
    format: 'umd',
    name: 'maroonUtils',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    autoExternal(), // 自动 external
    babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] }), // babel配置,编译es6
    // terser(),
    // bundleSize(),
  ],
};
