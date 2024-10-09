// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        home: resolve(__dirname, 'html/page_content/home.html'),
        projects: resolve(__dirname, 'html/page_content/projects.html'),
        blog: resolve(__dirname, 'html/page_content/blog.html'),
        about: resolve(__dirname, 'html/page_content/about.html'),
      },
    },
  },
})