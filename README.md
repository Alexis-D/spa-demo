Playing with things, 2026 edition.

Simple backend with FastAPI in [`backend/`](./backend). Not much to see there:

* Using `uv` to manage deps/etc
* Simple `Dockerfile` to build an image to run
* Runs locally with `uv run fastapi dev` (http://localhost:8000/)
* `uv format`, `uv check`, ...

Frontend lives in [`frontend/`](./frontend/). `rsbuild` handles the whole building steps, otherwise typescript+react+react-query. Interesting bits:

* `npm run openapi-ts` reads the FastAPI OpenAPI spec from http://localhost:8000/openapi.json and generates bindings to use with react-query in [`frontend/src/client/`](./frontend/src/client).
* `npm run dev` runs the frontend at http://localhost:3000/.
* `npm run check`, `npm run format`


The whole thing can be ran through `docker-compose up` (which ties everything together behind nginx, frontend gets built and static assets get baked into the nginx image, the FastAPI backend runs as its own service).
