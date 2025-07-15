# 🚀 PHP CRUD API (Slim Framework)

Esta pasta contém a implementação do CRUD usando **PHP** com **Slim Framework**, **Eloquent ORM**, **JWT** para autenticação e **SQLite** como banco de dados leve para testes locais.

---

## 📂 Estrutura

```plaintext
php-api/
├── README.md
├── public/
│   └── index.php
├── src/
│   ├── Controllers/
│   │   ├── AuthController.php
│   │   ├── UserController.php
│   │   └── TaskController.php
│   ├── Models/
│   │   ├── User.php
│   │   └── Task.php
│   ├── Middleware/
│   │   └── AuthMiddleware.php
│   ├── routes.php
│   └── dependencies.php
├── database.sqlite
├── composer.json
├── .env

⚙️ Requisitos
* PHP 8+
* Composer

▶️ Instalação
1️⃣ Instale as dependências:
composer install

2️⃣ Crie o banco SQLite:
touch database.sqlite

(Windows)
type nul > database.sqlite

3️⃣ Configure o arquivo .env:
DB_CONNECTION=sqlite
DB_DATABASE=./database.sqlite
JWT_SECRET=sua_chave_secreta

⚡ Rodar a API
Use o servidor embutido do PHP:
php -S localhost:8001 -t public
A API estará em http://localhost:8001.

🔑 Endpoints principais
Método	Rota	Descrição
POST	/register	Registra novo usuário
POST	/login	Autentica e gera JWT
GET	/users	Lista todos os usuários
POST	/tasks	Cria nova tarefa (JWT obrigatório)
GET	/tasks	Lista tarefas do usuário (JWT obrigatório)

🔒 Autenticação
Para rotas protegidas, envie o JWT no cabeçalho:
Authorization: Bearer SEU_TOKEN_AQUI

🧪 Exemplos cURL
Registrar usuário:
curl -X POST http://localhost:8001/register \
 -H "Content-Type: application/json" \
 -d '{"name":"Maria","email":"maria@email.com","password":"123456"}'

Login:
curl -X POST http://localhost:8001/login \
 -H "Content-Type: application/json" \
 -d '{"email":"maria@email.com","password":"123456"}'

Criar tarefa:
curl -X POST http://localhost:8001/tasks \
 -H "Authorization: Bearer SEU_TOKEN_AQUI" \
 -H "Content-Type: application/json" \
 -d '{"title":"Nova tarefa","description":"Descrição"}'

✅ Notas
* Estrutura MVC simplificada.
* Comentários no código para estudo.
* Banco SQLite local, sem dependências externas.

