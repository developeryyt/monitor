import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'path';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  dotenvConfig({ path: resolve(__dirname, `.env.${mode}`)})

  const base = process.env.VITE_API ?? '/'


  return {
    plugins: [react()],
    base: base,
    define: {
      'process.env' : process.env
    },
    // server: {
    //   port: 4000,
    //   watch: {
    //     ignored: ['**/node_modules', '**/build']
    //   }
    // }
  }
})
