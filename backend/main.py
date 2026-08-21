import asyncio

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    message: str


@app.get("/hello", operation_id="hello")
async def hello() -> Item:
    await asyncio.sleep(1)
    return Item(message="Hello World")


@app.get("/echo/{text}", operation_id="echo")
async def echo(text: str) -> Item:
    return Item(message=text)


@app.get("/upupup/{text}", operation_id="up")
async def echo(text: str) -> Item:
    return Item(message=text.upper())
