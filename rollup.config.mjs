import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import path from "path";

const target = process.env.TARGET;
const projectPath = `packages/${target}`;
const input = `${projectPath}/src/index.ts`;
const projectRootDir = `${path.resolve(__dirname)}/packages/${target}`;
const getPath = (path) => {
  return `${projectPath}/${path}`;
};

const config = [
  {
    input,
    output: [
      {
        file: getPath("/dist/cjs/index.js"),
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: getPath("/dist/esm/index.js"),
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".svg"],
      }),
      commonjs(),
      alias({
        resolve: [".tsx", ".js", ".ts", ".json", ".svg"],
        entries: [
          { find: "@", replacement: path.resolve(projectRootDir, "src") },
        ],
      }),
      typescript({ tsconfig: `${projectPath}/tsconfig.json` }),
      postcss(),
      json(),
    ],
    external: ["react", "react-native"],
  },
  {
    input: input,
    output: [
      {
        file: getPath("/dist/types.d.ts"),
        format: "es",
        interop: "compat",
      },
    ],
    plugins: [dts.default()],
  },
];

export default config;
