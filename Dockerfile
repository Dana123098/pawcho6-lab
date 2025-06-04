# Etap 1 — build stage
FROM node:alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY index.js .

# Etap 2 — finalny, lekki obraz
FROM alpine
WORKDIR /app
ARG VERSION
ENV VERSION=${VERSION}
RUN apk add --no-cache nodejs
COPY --from=build /app /app
EXPOSE 8080
CMD ["node", "index.js"]