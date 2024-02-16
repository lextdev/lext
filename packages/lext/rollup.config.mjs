import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
import pkg from "./package.json";

export default [
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
