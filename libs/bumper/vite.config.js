import path from 'path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { name, version } from './package.json'
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			fileName: 'index',
			formats: ['es'],
			name,
		},
		outDir: './lib',
		ssr: true
	},
	define: {
		pkgJson: { name, version },
	},
	logLevel: 'warn',
	plugins: [solid({
		babel: ['@babel/preset-typescript', 'babel-preset-solid'],
		solid: {
			generate: 'ssr'
		},
		typescript: {
			isTSX: true,
			allExtensions: true,
		}
	})],
})
