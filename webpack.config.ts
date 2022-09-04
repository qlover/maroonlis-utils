import * as path from 'path';
import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
// import 'webpack-dev-server';
// const { name } = packagejson;

const configMap: Record<string, webpack.Configuration> = {
  cjs: {
    entry: {
      index: './src/index.ts',
      'asyncSleep/index': './src/asyncSleep/index.ts',
      'lang/index': './src/lang/index.ts',
      'service/index': './src/service/index.ts',
      'Store/index': './src/Store/index.ts',
    },
    output: {
      path: path.resolve(__dirname, 'cjs'),
      filename: '[name].js',
      libraryTarget: 'commonjs',
      // library: {
      //   export: 'defualt',
      //   type: 'commonjs',
      // },
    },
  },
  esm: {
    entry: {
      index: './src/index.ts',
      'asyncSleep/index': './src/asyncSleep/index.ts',
      'lang/index': './src/lang/index.ts',
      'service/index': './src/service/index.ts',
      'Store/index': './src/Store/index.ts',
    },
    output: {
      path: path.resolve(__dirname, 'esm'),
      filename: '[name].js',
      libraryTarget: 'module',
      // library: {
      //   type: 'module',
      //   export: 'default',
      // },
    },
  },
  umd: {
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'umd'),
      filename: 'index.js',
      libraryTarget: 'umd',
      // library: {
      //   name: 'maroonlisUtils',
      //   type: 'umd',
      // },
    },
  },
};

export default function (env, argv) {
  console.log('webpack.config.js arguments', env, argv);

  const mode = argv.env.target as 'cjs' | 'umd' | 'esm';

  const config: webpack.Configuration = {
    devtool: 'nosources-source-map',
    experiments: {
      outputModule: mode === 'esm',
    },

    mode: argv.mode,
    ...configMap[mode],

    externals: ['lodash', 'moment'],
    // devServer: {
    //   open: true,
    //   host: 'localhost',
    // },

    plugins: [],
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/i,
          loader: 'ts-loader',
          exclude: ['/node_modules/'],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
  return config;
}
