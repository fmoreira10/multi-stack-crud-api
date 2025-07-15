<<<<<<< HEAD
# 📚 Multi-Stack CRUD API

Este repositório demonstra um **CRUD completo** em **4 stacks diferentes** para fins de **estudo**, **portfólio** e **demonstração técnica**.

---

## 🚀 Objetivo

✔️ Registrar usuários  
✔️ Autenticação JWT  
✔️ CRUD de Tarefas vinculadas ao usuário logado  
✔️ Banco de dados SQLite  
✔️ Estrutura organizada e didática  
✔️ Fácil de executar localmente

---

## 📂 Estrutura do Projeto

```plaintext
.
├── README.md             # Documentação geral
├── docker-compose.yml    # (Opcional) Containers para cada API
│
├── php-api/              # CRUD em PHP (Slim)
│   ├── README.md
│   ├── src/
│   ├── public/
│   ├── .env
│   └── ...
│
├── node-api/             # CRUD em Node.js (Express)
│   ├── README.md
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── ...
│
├── python-api/           # CRUD em Python (FastAPI)
│   ├── README.md
│   ├── app/
│   ├── .env
│   ├── requirements.txt
│   └── ...
│
└── typescript-api/       # CRUD em TypeScript (NestJS)
    ├── README.md
    ├── src/
    ├── .env
    ├── package.json
    └── ...

⚙️ Pré-requisitos
* Git
* Node.js (v18+)
* npm
* Composer (para PHP)
* PHP (v8+)
* Python (v3.10+)
* Docker (opcional)
* Prisma CLI (para TypeScript)

▶️ Como usar
1️⃣ Clone o repositório
git clone https://github.com/SEU_USUARIO/multi-stack-crud-api.git
cd multi-stack-crud-api

2️⃣ Acesse a stack desejada e siga o README.md dentro da pasta:
* 📁 php-api/README.md
* 📁 node-api/README.md
* 📁 python-api/README.md
* 📁 typescript-api/README.md

🔑 Principais Endpoints
Método	Rota	Descrição
POST	/register	Registra novo usuário
POST	/login	Autentica e gera JWT
GET	/users	Lista usuários cadastrados
POST	/tasks	Cria tarefa (requer JWT)
GET	/tasks	Lista tarefas do usuário logado

🐳 Rodar com Docker (Opcional)
Inclua o docker-compose.yml e execute:
docker-compose up --build

🏗️ Contribuição
Este projeto é didático — sinta-se livre para:
* Adicionar testes unitários
* Integrar com outros bancos (PostgreSQL, MongoDB)
* Melhorar autenticação
* Criar mais endpoints

⚡ Licença
Uso livre para aprendizado e portfólio!
Desenvolvido por Fernando A. Moreira 🚀
=======
# multi-stack-crud-api
This repository showcases a complete CRUD API for managing users and tasks implemented in 4 different stacks: PHP (Slim), Node.js (Express), Python (FastAPI) and TypeScript (NestJS). It is designed for study, portfolio and technical demonstration, with JWT authentication, SQLite database and modular structure.
>>>>>>> 3a65b336c7f7f152227f3816f881b43ffaca3d0b
