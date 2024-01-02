import db

from fastapi import FastAPI

from models.types import Temperature

app = FastAPI()


@app.get("/")
async def root(param: str | None = "c"):
    if param in ("c", "f"):
        return db.read_data(param)
    return {"message": "Not Found"}


@app.post('/')
async def post(temperature: Temperature):
    db_dict = {
        'date': temperature.time,
        'temperature': temperature.temperature,
        'param': temperature.param,
    }
    return db.post_data(db_dict)


@app.put('/')
async def update(temperature: Temperature):
    db_dict = {
        'date': temperature.time,
        'temperature': temperature.temperature,
        'param': temperature.param,
    }
    return db.put_data(db_dict)


@app.delete('/')
async def delete(date: float):
    return db.delete_data(date)