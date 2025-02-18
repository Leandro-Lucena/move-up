#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $0) && pwd)

export API_PORT=3333
export REACT_NATIVE_PACKAGER_HOSTNAME="10.10.57.174"

echo ">>> Configurando variáveis de ambiente..."
cd $SCRIPT_DIR/mobile && node setEnv.js
ENV_EXIT_CODE=$?
cd $SCRIPT_DIR

if [ $ENV_EXIT_CODE -ne 0 ]; then
  echo "Erro ao configurar variáveis de ambiente. Saindo..."
  exit 1
fi

echo ">>> Inicializando a API..."
cd $SCRIPT_DIR/api && npm install && npm start &
API_PID=$!
cd $SCRIPT_DIR

echo ">>> Aguardando a API estar disponível..."
while ! nc -z localhost $API_PORT; do   
  sleep 1
done

echo ">>> API iniciada com sucesso!"

echo ">>> Inicializando o aplicativo mobile..."
cd $SCRIPT_DIR/mobile && npm install && npx expo start &
MOBILE_PID=$!
cd $SCRIPT_DIR

cleanup() {
  echo ">>> Encerrando serviços..."
  kill $API_PID
  kill $MOBILE_PID
  exit 0
}

trap cleanup SIGINT

wait $API_PID
wait $MOBILE_PID
