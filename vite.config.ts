import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@images': path.resolve(__dirname, './src/images'),
		},
	},
	plugins: [react()],
})
