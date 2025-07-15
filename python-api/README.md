# Crie venv e ative se quiser:
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Instale as dependências:
pip install -r requirements.txt

# Rode o servidor:
uvicorn app.main:app --reload

# Python API

Documentação da API em Python.