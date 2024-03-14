import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import path from "path";
import getPkg from "./scripts/pkg/index";

async function bootstrap() {
  const TARGET = process.env.TARGET;
  const PROJECTROOTDIR = `${path.resolve(__dirname)}/packages/${TARGET}`;
  const INPUT = `${PROJECTROOTDIR}/src/index.ts`;

  const pkg = await getPkg(PROJECTROOTDIR);
  if (!pkg) {
    console.error("Error reading package.json");
    return;
  }

  const externalModules = Object.keys(pkg.peerDependencies || {});
  const resolveModules = [".js", ".jsx", ".ts", ".tsx", ".json", ".svg"];
  const filePath = (dir) => {
    return `${PROJECTROOTDIR}/${dir}`;
  };

  return [
    {
      input: INPUT,
      output: [
        {
          file: filePath(pkg.main),
          format: "cjs",
          exports: "named",
          sourcemap: true,
        },
        {
          file: filePath(pkg.module),
          format: "esm",
          exports: "named",
          sourcemap: true,
        },
      ],
      plugins: [
        external(),
        resolve({
          extensions: resolveModules,
        }),
        commonjs(),
        alias({
          resolve: resolveModules,
          entries: [
            { find: "@", replacement: path.resolve(PROJECTROOTDIR, "src") },
          ],
        }),
        typescript({ tsconfig: `${PROJECTROOTDIR}/tsconfig.json` }),
        postcss(),
        json(),
      ],
      external: externalModules,
    },
    {
      input: INPUT,
      output: [
        {
          file: filePath(pkg.types),
          format: "es",
          interop: "compat",
        },
      ],
      plugins: [dts.default()],
    },
  ];
}

export default bootstrap();
