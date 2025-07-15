from passlib.context import CryptContext
from datetime import datetime, timedelta
from jose import jwt

from dotenv import load_dotenv
import os

load_dotenv()

SECRET_KEY = os.getenv("JWT_SECRET")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        return None
    except jwt.JWTError:
        return None 
def get_current_user(token: str):
    payload = verify_token(token)
    if payload:
        return payload.get("sub")
    return None
def get_current_user_id(token: str):
    payload = verify_token(token)
    if payload:
        return payload.get("user_id")
    return None
def get_current_user_role(token: str):
    payload = verify_token(token)
    if payload:
        return payload.get("role")
    return None
def get_current_user_email(token: str):
    payload = verify_token(token)
    if payload:
        return payload.get("email")
    return None