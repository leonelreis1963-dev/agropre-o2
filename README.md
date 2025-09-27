<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Agro Preço Marola

Este projeto contém o código para o aplicativo "Agro Preço Marola", que permite pesquisar preços de produtos agrícolas usando IA.

## Executando Localmente

**Pré-requisitos:** [Node.js](https://nodejs.org/) instalado.

1.  **Instale as dependências:**
    ```bash
    npm install
    ```
2.  **Configure sua chave de API:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione sua chave de API do Gemini:
    ```
    API_KEY=SUA_CHAVE_DE_API_AQUI
    ```
3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O aplicativo estará disponível em `http://localhost:5173` (ou outra porta, se a 5173 estiver em uso).

## Deploy (Implantação)

Para implantar esta aplicação em plataformas como a Vercel, você precisa configurar a variável de ambiente `API_KEY` nas configurações do seu projeto na plataforma.

- **Nome da Variável:** `API_KEY`
- **Valor:** Sua chave de API do Gemini

O processo de build irá falhar com um erro claro se a variável `API_KEY` não for encontrada. Isso garante que a chave seja configurada corretamente antes da implantação.

---
*Veja seu app no AI Studio: https://ai.studio/apps/drive/1aWrVeb6lxtcBlWSTovE3y1860pF5Sa0H*
