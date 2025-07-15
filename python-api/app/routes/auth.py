from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm

from .. import crud, auth, schemas
from ..deps import get_db

router = APIRouter()

@router.post("/register", response_model=schemas.UserOut)
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db, user)

@router.post("/login", response_model=schemas.Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = crud.get_user_by_email(db, form_data.username)
    if not user or not auth.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = auth.create_access_token({"sub": user.id})
    return {"access_token": token, "token_type": "bearer"}
@router.get("/me", response_model=schemas.UserOut)
def get_current_user(current_user: schemas.UserOut = Depends(auth.get_current_user), db: Session = Depends(get_db)):
    return current_user 
@router.get("/me/tasks", response_model=list[schemas.TaskOut])
def get_user_tasks(current_user: schemas.UserOut = Depends(auth.get_current_user), db: Session = Depends(get_db)):
    tasks = crud.get_tasks(db, current_user.id)
    return tasks