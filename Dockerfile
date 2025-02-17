FROM node:22-alpine

ENV DATABASE_URL="file:./dev.db"

WORKDIR /app

RUN apk add --no-cache openssl3

COPY . .

RUN cd /app/api && npm install && npm install tsx && npm install express && npx prisma generate
RUN cd /app/mobile && npm install

# RUN cd /app/api && npx prisma generate

RUN chmod +x /app/run.sh