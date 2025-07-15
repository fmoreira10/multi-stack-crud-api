from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import schemas, crud
from ..deps import get_db, get_current_user

router = APIRouter()

@router.post("/tasks", response_model=schemas.TaskOut)
def create_task(task: schemas.TaskCreate, db: Session = Depends(get_db), user = Depends(get_current_user)):
    return crud.create_task(db, task, user.id)

@router.get("/tasks", response_model=list[schemas.TaskOut])
def get_tasks(db: Session = Depends(get_db), user = Depends(get_current_user)):
    return crud.get_tasks(db, user.id)
@router.get("/tasks/{task_id}", response_model=schemas.TaskOut)
def get_task(task_id: int, db: Session = Depends(get_db), user = Depends(get_current_user)):
    task = crud.get_task(db, task_id, user.id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return task 
