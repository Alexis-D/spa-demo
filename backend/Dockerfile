FROM astral/uv:python3.12-alpine

WORKDIR /src
COPY pyproject.toml main.py uv.lock .

RUN uv sync
EXPOSE 8000
CMD ["uv", "run", "fastapi", "run"]
