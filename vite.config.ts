import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:'.',
  plugins: [react()],
  resolve: {
    alias: { '@/': `${process.cwd()}/src/` },
  },
  // resolve: {
  //   alias: [
  //     {
  //       find: '@/public',
  //       replacement: path.resolve(__dirname, '')
  //     },
  //     {
  //       find: '@',
  //       replacement: path.resolve(__dirname, 'src')
  //     }
  //   ]
  // }
})
