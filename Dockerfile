FROM node:26-alpine as frontend

WORKDIR /src
COPY frontend/biome.json frontend/openapi-ts.config.ts frontend/package-lock.json frontend/package.json frontend/rsbuild.config.ts frontend/tsconfig.json .
COPY frontend/src src/
COPY frontend/public public/
RUN npm i && npm run build

FROM nginx:mainline-alpine
COPY --from=frontend /src/dist /dist
