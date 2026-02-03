import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Force Chrome usage
process.env.BROWSER = 'chrome'

// https://vite.dev/config/
export default defineConfig({
  base: '/StreetV1/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    open: true,
  },
})
