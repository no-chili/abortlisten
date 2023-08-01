import typescript from 'rollup-plugin-typescript2'
import copy from 'rollup-plugin-copy'
export default {
	input: 'src/index.ts',
	plugins: [
		typescript({
			tsconfig: './tsconfig.json',
		}),
		copy({
			targets: [
				{
					src: './readme.md',
					dest: 'dist',
				},
				{
					src: './package.json',
					dest: 'dist',
				},
			],
		}),
	],
	output: [
		{
			format: 'es',
			file: 'dist/index.js',
		},
	],
}
