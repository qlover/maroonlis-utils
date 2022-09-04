import * as path from 'path';
import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
// import 'webpack-dev-server';
// const { name } = packagejson;

// const configMap = {
//   cjs: {
//     entry: {
//       index: './src/index.ts',
//       'asyncSleep/index': './src/asyncSleep/index.ts',
//       'lang/index': './src/lang/index.ts',
//       'service/index': './src/service/index.ts',
//       'Store/index': './src/Store/index.ts',
//     },
//     output: {
//       path: path.resolve(__dirname, 'cjs'),
//       library: {
//         name,
//         type: 'commonjs',
//       },
//     },
//   },
//   esm: {
//     entry: {
//       index: './src/index.ts',
//       'asyncSleep/index': './src/asyncSleep/index.ts',
//       'lang/index': './src/lang/index.ts',
//       'service/index': './src/service/index.ts',
//       'Store/index': './src/Store/index.ts',
//     },
//     output: {
//       path: path.resolve(__dirname, 'esm'),
//       filename: 'esm/index.js',
//       library: {
//         type: 'module',
//         export: 'default',
//       },
//     },
//   },
//   umd: {
//     entry: './index.js',
//     output: {
//       path: path.resolve(__dirname, 'umd'),
//       filename: 'index.js',
//       library: {
//         name,
//         type: 'umd',
//       },
//     },
//   },
// };

export default function (env, argv) {
  console.log('webpack.config.js arguments', env, argv);

  const mode = argv.env.target as 'lib' | 'umd' | 'esm';

  const config: webpack.Configuration = {
    devtool: 'nosources-source-map',
    experiments: {
      outputModule: mode === 'esm',
    },

    mode: argv.mode,
    entry: {
      index: './src/index.ts',
      'asyncSleep/index': './src/asyncSleep/index.ts',
      'lang/index': './src/lang/index.ts',
      'service/index': './src/service/index.ts',
      'Store/index': './src/Store/index.ts',
    },
    output: {
      path: path.resolve(__dirname, 'lib'),
      library: {
        // name:'',
        type: 'commonjs',
      },
    },
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
