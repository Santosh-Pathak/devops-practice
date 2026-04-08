from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import Depends, FastAPI, Form, Request, status
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session

from app.database import Base, engine, get_db
from app.models import CooldownItem

TEMPLATE_DIR = Path(__file__).resolve().parent / "templates"
templates = Jinja2Templates(directory=str(TEMPLATE_DIR))


@asynccontextmanager
async def lifespan(_: FastAPI):
    Base.metadata.create_all(bind=engine)
    yield


app = FastAPI(
    title="Cooldown List",
    description="Put impulse buys on ice — unlock only after your chosen wait.",
    version="0.1.0",
    lifespan=lifespan,
)


@app.get("/health")
def health():
    return {"status": "ok", "service": "cooldown-list"}


@app.get("/", response_class=HTMLResponse)
def home(request: Request, db: Session = Depends(get_db)):
    items = db.query(CooldownItem).order_by(CooldownItem.created_at.desc()).all()
    return templates.TemplateResponse(
        "index.html",
        {"request": request, "items": items},
    )


@app.post("/items", status_code=status.HTTP_303_SEE_OTHER)
def create_item(
    title: str = Form(...),
    note: str = Form(""),
    cooldown_days: int = Form(7),
    db: Session = Depends(get_db),
):
    title = title.strip()
    if not title:
        return RedirectResponse(url="/", status_code=status.HTTP_303_SEE_OTHER)
    days = max(1, min(cooldown_days, 365))
    item = CooldownItem(title=title, note=note.strip(), cooldown_days=days)
    db.add(item)
    db.commit()
    return RedirectResponse(url="/", status_code=status.HTTP_303_SEE_OTHER)


@app.post("/items/{item_id}/delete", status_code=status.HTTP_303_SEE_OTHER)
def delete_item(item_id: int, db: Session = Depends(get_db)):
    row = db.get(CooldownItem, item_id)
    if row:
        db.delete(row)
        db.commit()
    return RedirectResponse(url="/", status_code=status.HTTP_303_SEE_OTHER)
