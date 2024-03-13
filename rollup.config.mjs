import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import svg from 'rollup-plugin-svg';
import { terser } from 'rollup-plugin-terser';

const target = process.env.TARGET;

const input = `packages/${target}/src/index.ts`;

const config = {
  input,
  output: [
    {
      file: `packages/${target}/dist/index.js`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: `packages/${target}/dist/index.esm.js`,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
    }),
    commonjs(),
    typescript({ tsconfig: `packages/${target}/tsconfig.json` }),
    svg(),
    terser(),
  ],
  external: ['react', 'react-native'],
};

export default config;
