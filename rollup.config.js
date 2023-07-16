import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: 'src/index.ts',
        plugins: [
            commonjs(),
            typescript(),
            terser(),
            // nodeResolve({ preferBuiltins: true }),
            json(),
        ],
        output: [
            {
                file: 'dist/bundle.js',
                format: 'esm',
                sourcemap: false,
            },
        ],
    },
    {
        input: 'src/index.ts',
        output: [{ file: 'dist/types.d.ts' }],
        plugins: [dts()],
    },
];
