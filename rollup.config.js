import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import autoExternal from 'rollup-plugin-auto-external';
import commonjs from 'rollup-plugin-commonjs';
import dts from 'rollup-plugin-dts';
import typescript from 'rollup-plugin-typescript';
import * as pkg from './package.json';
const input = 'src/index.ts';

/**
 * @type {() => import('rollup').RollupOptions}
 */
function build(target, mode) {
  const mixed = false;
  return {
    input,
    output: {
      format: target,
      dir: target,
      name: target === 'umd' ? pkg.name : void 0,
      sourcemap: !mixed,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      autoExternal(), // 自动 external
      babel({ babelHelpers: 'bundled', presets: ['@babel/preset-env'] }), // babel配置,编译es6
      mixed && terser(),
      // mixed && bundleSize(),
    ],
  };
}

/**
 * @type {() => Array<import('rollup').RollupOptions>}
 */
export default (args) => {
  const { mode = 'development' } = args;

  return [
    // umd
    build('umd', mode),
    // cjs
    build('cjs', mode),
    // esm
    build('es', mode),

    // d.ts
    {
      input,
      plugins: [dts()],
      output: {
        format: 'esm',
        file: 'types/index.d.ts',
      },
    },
  ];
};
