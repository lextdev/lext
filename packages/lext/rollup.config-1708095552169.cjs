'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var resolve = require('@rollup/plugin-node-resolve');
var commonjs = require('@rollup/plugin-commonjs');
var typescript = require('@rollup/plugin-typescript');
var dts = require('rollup-plugin-dts');
var peerDepsExternal = require('rollup-plugin-peer-deps-external');
var postcss = require('rollup-plugin-postcss');
var json = require('@rollup/plugin-json');
var pkg = require('./package.json');

var rollup_config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
        interop: "compat",
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
        interop: "compat",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({ preferBuiltins: true }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      json(),
    ],
    external: [
      "@emotion/react",
      "@emotion/native",
      "@react-native-async-storage/async-storage",
      "react-native-mask-input",
      "react-native-svg",
      "@react-navigation/native",
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es", interop: "compat" }],
    plugins: [dts.default()],
  },
];

exports.default = rollup_config;
