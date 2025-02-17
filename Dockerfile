FROM node:22-alpine

ENV DATABASE_URL="file:./dev.db"

WORKDIR /app

RUN apk add --no-cache openssl3

COPY package*.json ./
COPY api/package*.json ./api/
COPY mobile/package*.json ./mobile/

RUN cd /app/api && npm install
RUN cd /app/mobile && npm install

COPY . .

RUN cd /app/api && npx prisma migrate dev --name initial_migration && npx prisma generate

RUN chmod +x /app/run.sh