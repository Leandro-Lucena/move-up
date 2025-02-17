#!/bin/sh

echo ">>> Inicializando a API..."
cd api && npm start & 
API_PID=$!

echo ">>> Inicializando o aplicativo mobile..."
cd mobile && npx expo start &
MOBILE_PID=$!

cleanup() {
  echo ">>> Encerrando a API e o Mobile..."
  kill $API_PID
  kill $MOBILE_PID
  exit 0
}

trap cleanup SIGINT

wait $API_PID
wait $MOBILE_PID
