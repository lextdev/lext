import alias from "@rollup/plugin-alias"
import commonjs from "@rollup/plugin-commonjs"
import dts from "rollup-plugin-dts"
import external from "rollup-plugin-peer-deps-external"
import getPkg from "./scripts/pkg/index"
import json from "@rollup/plugin-json"
import path from "path"
import postcss from "rollup-plugin-postcss"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"

async function bootstrap() {
  // eslint-disable-next-line no-undef
  const TARGET = process.env.TARGET
  // eslint-disable-next-line no-undef
  const PROJECTROOTDIR = `${path.resolve(__dirname)}/packages/${TARGET}`
  const INPUT = `${PROJECTROOTDIR}/src/index.ts`

  const pkg = await getPkg(PROJECTROOTDIR)
  if (!pkg) {
    console.error("Error reading package.json")
    return
  }

  const externalModules = Object.keys(pkg.peerDependencies || {})
  const resolveModules = [".js", ".jsx", ".ts", ".tsx", ".json", ".svg"]
  const filePath = (dir) => {
    return `${PROJECTROOTDIR}/${dir}`
  }

  return [
    {
      input: INPUT,
      output: [
        {
          file: filePath(pkg.main),
          format: "cjs",
          exports: "named",
          interop: "compat",
          sourcemap: true,
        },
        {
          file: filePath(pkg.module),
          format: "esm",
          exports: "named",
          interop: "compat",
          sourcemap: true,
        },
      ],
      plugins: [
        external(),
        resolve(),
        alias({
          resolve: resolveModules,
          entries: [
            { find: "@", replacement: path.resolve(PROJECTROOTDIR, "src") },
          ],
        }),
        commonjs(),
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
  ]
}

export default bootstrap()
