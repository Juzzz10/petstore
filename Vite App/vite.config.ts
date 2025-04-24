import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Use @vitejs/plugin-react for React projects

export default defineConfig({
  plugins: [react()], // Updated to use React plugin
  server: {
    proxy: {
      '/enriquez': {
        target: 'http://localhost:5173', // Java backend URL
        changeOrigin: true, 
        secure: false, 
        rewrite: (path) => path.replace(/^\/enriquez/, ''), 
      },
    },
  },
});