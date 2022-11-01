import babel_ from '@rollup/plugin-babel'
import run_ from '@rollup/plugin-run'
export default {
	input: './src/Svg_bumper_assembly__run.tsx',
	output: {
		dir: './dist'
	},
	plugins: [babel_({
		babelHelpers: "bundled",
		presets: ['@babel/preset-typescript', 'babel-preset-solid'],
		extensions: ['.js', '.ts', '.jsx', '.tsx'],
	}), run_()],
	extensions: ['.js', '.ts', '.jsx', '.tsx'],
}
