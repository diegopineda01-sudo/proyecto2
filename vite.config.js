import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/proyecto2/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        proyectos: resolve(__dirname, 'proyectos.html'),
      },
    },
  },
})