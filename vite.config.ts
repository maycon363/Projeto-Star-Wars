// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Projeto-Star-Wars/', // 👈 Isso aqui é o nome do repositório
  plugins: [react()],
});
