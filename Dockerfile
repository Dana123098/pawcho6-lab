
FROM node:16-alpine


WORKDIR /app


COPY package.json .
COPY index.js .


RUN npm install


ARG VERSION
ENV VERSION=${VERSION}


EXPOSE 8080


CMD ["node", "index.js"]