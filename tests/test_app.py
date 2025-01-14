import sys
import os

# Add the src directory to the Python module search path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../src")))
from app import app


import pytest
from src.app import app


@pytest.fixture
def client():
    with app.test_client() as client:
        yield client


def test_home(client):
    response = client.get("/")
    assert response.status_code == 200
    assert response.json == {"message": "Welcome to the Production-Ready Demo App!"}


def test_health(client):
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json == {"status": "healthy"}
