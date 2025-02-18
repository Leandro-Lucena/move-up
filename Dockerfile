FROM node:lts-alpine
WORKDIR /app
RUN apk add --no-cache netcat-openbsd openssl
COPY . .
RUN chmod +x run.sh