// Fix: Add a triple-slash directive to provide Node.js types for `process`.
/// <reference types="node" />

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente do .env na raiz do projeto
  const env = loadEnv(mode, process.cwd(), '');
  const apiKey = env.API_KEY || process.env.API_KEY;

  // Falha o build se a API_KEY não estiver definida
  if (!apiKey) {
    throw new Error('A variável de ambiente API_KEY não está definida. Defina-a em seu arquivo .env ou nas configurações de ambiente de sua plataforma de deploy.');
  }
  
  return {
    plugins: [react()],
    define: {
      // Isso expõe a variável de ambiente para o código do cliente de forma segura
      'process.env.API_KEY': JSON.stringify(apiKey)
    }
  }
})