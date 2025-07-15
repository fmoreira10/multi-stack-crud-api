# 🚀 Node.js CRUD API

Este projeto é uma API RESTful simples feita em **Node.js** com **Express** para gerenciar **Usuários** e **Tarefas**, usando **JWT** para autenticação e **SQLite** para persistência.

---

## 📦 Estrutura

```plaintext
node-api/
├── README.md
├── src/
│   ├── app.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── users.js
│   │   └── tasks.js
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── config/
├── .env
├── package.json
└── database.sqlite

⚙️ Requisitos
* Node.js v18+
* npm

▶️ Instalação
# Acesse a pasta
cd node-api

# Instale as dependências
npm install

⚡ Rodar a API
npm run dev
Por padrão, a API roda em http://localhost:3000.

🔑 Endpoints principais
Método	Rota	Descrição
POST	/register	Registra novo usuário
POST	/login	Autentica e gera JWT
GET	/users	Lista todos os usuários
POST	/tasks	Cria nova tarefa (JWT obrigatório)
GET	/tasks	Lista tarefas do usuário (JWT obrigatório)

🔒 Autenticação
Para acessar /tasks você precisa enviar o JWT no cabeçalho:
Authorization: Bearer SEU_TOKEN_AQUI

🗄️ Banco de dados
* SQLite (arquivo database.sqlite na raiz).
* As tabelas são criadas automaticamente na primeira execução, ou siga as instruções do README.

🧪 Exemplos cURL
Registrar usuário:
curl -X POST http://localhost:3000/register \
 -H "Content-Type: application/json" \
 -d '{"name":"João","email":"joao@email.com","password":"123456"}'

Login:
curl -X POST http://localhost:3000/login \
 -H "Content-Type: application/json" \
 -d '{"email":"joao@email.com","password":"123456"}'

Criar tarefa:
curl -X POST http://localhost:3000/tasks \
 -H "Authorization: Bearer SEU_TOKEN_AQUI" \
 -H "Content-Type: application/json" \
 -d '{"title":"Nova Tarefa","description":"Detalhes da tarefa"}'

✅ Notas
* Estrutura em MVC simples.
* Código comentado para facilitar o estudo.
* Sinta-se livre para melhorar!

🚀 Bons testes e bons estudos!