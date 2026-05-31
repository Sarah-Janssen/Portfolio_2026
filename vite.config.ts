import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    exclude: ['**/node_modules/**', '**/dist/**', '**/e2e/**'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*'],
      exclude: [
        'src/main.tsx',
        'src/vite-env.d.ts',
        'src/types/**/*',
        'src/test/**/*',
        '**/*.test.ts',
        '**/*.test.tsx',
      ],
      reporter: ['text', 'json', 'html'],
    },
  },
} as any)
