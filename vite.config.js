import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// NOTE: For GitHub Pages project sites, set base to '/<your-repo-name>/'.
// For Vercel / Netlify (root domain), leave base as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
