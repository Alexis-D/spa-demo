FROM astral/uv:python3.13-alpine

WORKDIR /src
COPY pyproject.toml uv.lock .
RUN uv sync --frozen --no-install-project
COPY README.md .
COPY src src/

EXPOSE 8000
CMD ["uv", "run", "fastapi", "run"]
