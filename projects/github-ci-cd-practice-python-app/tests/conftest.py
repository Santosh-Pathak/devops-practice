import os

# In-memory DB before app imports so `app.database` binds to it.
os.environ["DATABASE_URL"] = "sqlite:///:memory:"

import pytest
from starlette.testclient import TestClient

from app.database import Base, SessionLocal, engine, get_db
from app.main import app


@pytest.fixture
def db_session():
    Base.metadata.create_all(bind=engine)
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()
        Base.metadata.drop_all(bind=engine)


@pytest.fixture
def client(db_session):
    def override_get_db():
        try:
            yield db_session
        finally:
            pass

    app.dependency_overrides[get_db] = override_get_db
    with TestClient(app) as c:
        yield c
    app.dependency_overrides.clear()
