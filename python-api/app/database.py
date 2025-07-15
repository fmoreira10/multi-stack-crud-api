from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
# This function is used to get a database session for each request in FastAPI.
# It ensures that the session is closed after the request is processed. 
# The `yield` statement allows the function to be used as a generator, which is useful for dependency injection in FastAPI.
# The `connect_args={"check_same_thread": False}` is used for SQLite to allow multiple threads to access the database connection.
# The `autocommit=False` and `autoflush=False` settings are used to control the transaction behavior of the session.
# The `Base` class is used to define the declarative base for SQLAlchemy models, which is a way to define database tables as Python classes.