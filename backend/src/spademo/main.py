import asyncio

from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    message: str


class ErrorDetails(BaseModel):
    details: str


@app.get("/hello", operation_id="hello")
async def hello() -> Item:
    await asyncio.sleep(1)
    return Item(message="Hello World")


@app.get(
    "/repeat/{count}",
    operation_id="repeat",
    response_model=Item,
    responses={
        400: {"model": ErrorDetails},
    },
)
async def echo(count: int, text: str) -> Item | JSONResponse:
    if count <= 0:
        return JSONResponse(
            status_code=400,
            content=ErrorDetails(details=f"{count=} must be > 0").model_dump(),
        )

    return Item(message=count * text)
