import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';

export default [
    {
        input: 'src/index.ts',
        plugins: [commonjs(), typescript({ useTsconfigDeclarationDir: true })],
        output: [
            {
                file: 'dist/bundle.js',
                format: 'esm',
                sourcemap: false,
            },
        ],
    },
    {
        input: 'dist/types/index.d.ts',
        output: [{ file: 'dist/types.d.ts' }],
        plugins: [dts()],
    },
];
