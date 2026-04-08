from app.models import CooldownItem


def test_health(client):
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok", "service": "cooldown-list"}


def test_home_empty(client):
    response = client.get("/")
    assert response.status_code == 200
    assert "Cooldown List" in response.text
    assert "Nothing here yet" in response.text


def test_create_item_redirect_and_listed(client):
    response = client.post(
        "/items",
        data={"title": "Test gadget", "note": "optional", "cooldown_days": "14"},
        follow_redirects=False,
    )
    assert response.status_code == 303
    assert response.headers["location"] == "/"

    page = client.get("/")
    assert page.status_code == 200
    assert "Test gadget" in page.text
    assert "optional" in page.text


def test_delete_item(client, db_session):
    client.post("/items", data={"title": "Gone soon", "cooldown_days": "1"})
    item = db_session.query(CooldownItem).first()
    assert item is not None

    response = client.post(f"/items/{item.id}/delete", follow_redirects=False)
    assert response.status_code == 303

    page = client.get("/")
    assert "Gone soon" not in page.text
