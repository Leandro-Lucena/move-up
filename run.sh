#!/bin/sh

SCRIPT_DIR=$(cd $(dirname "$0") && pwd)

echo ">>> Configurando variáveis de ambiente..."
cd "$SCRIPT_DIR/mobile" && node setEnv.js
ENV_EXIT_CODE=$?
cd "$SCRIPT_DIR"

if [ $ENV_EXIT_CODE -ne 0 ]; then
  echo "Erro ao configurar variáveis de ambiente. Saindo..."
  exit 1
fi

echo ">>> Inicializando a API..."
cd "$SCRIPT_DIR/api" && npm install
if [ -z "$(ls -A "$SCRIPT_DIR/api/prisma/migrations" 2>/dev/null)" ]; then
  npx prisma migrate dev --name initial
fi
npx prisma generate
npm start &
API_PID=$!
cd "$SCRIPT_DIR"

echo ">>> Aguardando a API estar disponível..."
while ! nc -z localhost $API_PORT; do   
  sleep 1
done

echo ">>> API iniciada com sucesso!"

echo ">>> Inicializando o aplicativo mobile..."
cd "$SCRIPT_DIR/mobile" && npm install 

cleanup() {
  echo ">>> Encerrando serviços..."
  kill $API_PID
  exit 0
}

trap cleanup SIGINT

exec npx expo start
