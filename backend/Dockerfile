FROM astral/uv:python3.13-alpine

WORKDIR /src
COPY pyproject.toml uv.lock .
RUN uv sync
COPY spa-demo spa-demo/

EXPOSE 8000
CMD ["uv", "run", "fastapi", "run"]
