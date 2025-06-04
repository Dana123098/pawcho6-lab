# Użyj obrazu bazowego Node.js
FROM node:16-alpine

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj pliki aplikacji
COPY package.json .
COPY index.js .

# Zainstaluj zależności
RUN npm install

# Ustaw zmienną środowiskową VERSION (opcjonalne)
ARG VERSION
ENV VERSION=${VERSION}

# Ekspozycja portu
EXPOSE 8080

# Uruchom aplikację
CMD ["node", "index.js"]