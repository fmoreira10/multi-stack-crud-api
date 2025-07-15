from fastapi import FastAPI
from .database import Base, engine
from .routes import auth, user, task

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth.router)
app.include_router(user.router)
app.include_router(task.router)
@app.get("/")
def read_root():
    return {"message": "Welcome to the Multi-Stack CRUD API!"}  
@app.get("/health")
def health_check():
    return {"status": "ok", "message": "API is running smoothly!"}  
@app.get("/about")
def about():
    return {
        "name": "Multi-Stack CRUD API",
        "version": "1.0.0",
        "description": "A simple CRUD API built with FastAPI, SQLAlchemy, and SQLite.",
        "author": "Your Name",
        "license": "MIT"
    }   
@app.get("/docs")
def get_docs():
    return {
        "message": "API documentation is available at /docs",
        "documentation_url": "/docs"
    }   
@app.get("/openapi.json")
def get_openapi():
    return {
        "message": "OpenAPI schema is available at /openapi.json",
        "schema_url": "/openapi.json"
    }   
@app.get("/version")
def get_version():
    return {
        "message": "API version information",
        "version": "1.0.0"
    }   
@app.get("/status")
def get_status():
    return {
        "message": "API status",
        "status": "running"
    }   
@app.get("/ping")
def ping():
    return {
        "message": "pong"
    }   
@app.get("/info")
def get_info():
    return {
        "message": "API information",
        "info": "This is a simple CRUD API built with FastAPI, SQLAlchemy, and SQLite."
    }   
@app.get("/healthcheck")
def health_check():
    return {
        "message": "API health check",
        "status": "healthy"
    }   