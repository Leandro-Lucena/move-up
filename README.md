# MoveUp

MoveUp é um aplicativo que permite descobrir academias, estúdios de artes marciais, centros esportivos e outros estabelecimentos dedicados à saúde, permitindo que os usuários encontrem atividades, treinos e produtos para melhorar seu condicionamento físico e qualidade de vida.

Este projeto tem como objetivo principal testar e apresentar conhecimentos adquiridos em tecnologias modernas de desenvolvimento de software.

## Tecnologias Utilizadas

### Frontend

- **React Native**: Framework para o desenvolvimento de aplicativos móveis multiplataforma.
- **Expo**: Ferramenta para desenvolvimento rápido e fácil de aplicativos React Native.

### Backend

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express**: Framework minimalista para Node.js, utilizado para construir a API.
- **Prisma**: ORM (Object Relational Mapping) para facilitar a interação com o banco de dados.
- **SQLite**: Banco de dados relacional leve e embutido, utilizado para persistência de dados no backend.

### Conteinerização

- **Docker**: Utilizado para a containerização do ambiente de desenvolvimento, garantindo um ambiente consistente e facilmente replicável.

## Objetivo do Projeto

Este projeto é desenvolvido com o propósito de **apresentar habilidades técnicas** e **demonstrar proficiência no uso de ferramentas modernas de desenvolvimento**.

Não se trata de um projeto de produção ou um aplicativo pronto para uso comercial, mas sim uma oportunidade de aprender, testar e demonstrar o uso dessas tecnologias em um ambiente prático.

### \*\* Observações Importantes \*\*

- Esse container não foi otimizado para produção, sendo apenas uma solução prática para o desenvolvimento local.
  Para facilitar os testes no ambiente de desenvolvimento, foi criado um script .sh que inicia tanto o Node.js quanto o Expo ao montar o container. Isso simplifica a execução do projeto e evita a necessidade de rodar múltiplos containers separadamente.

- A localização do usuário e todos os endereços e geolocalizações dos estabelecimentos mostrados no aplicativo são **fictícios**. A cidade de **Campo Grande - MS** foi escolhida para fins de teste no mapa, mas as localizações e dados exibidos não correspondem a locais reais. Caso haja alguma similaridade com estabelecimentos ou lugares reais, isso é **mera coincidência**.

## Teste em sua própria máquina

### Pré-requisitos

Antes de rodar o projeto, certifique-se de ter os seguintes requisitos:

- **Docker**: O Docker deve estar instalado em sua máquina. [Instale o Docker](https://www.docker.com/get-started).
- **Smartphone com Expo Go**: Um dispositivo Android ou iPhone com o aplicativo [Expo Go](https://expo.dev/tools#expo-go) instalado.
- O dispositivo deve estar **conectado à mesma rede LAN** que a máquina que vai rodar a imagem Docker.

### 1. Clonar o repositório

Primeiro, clone o repositório para sua máquina local. Você pode fazer isso de duas maneiras:

- **Via Git**:
  ```bash
  git clone https://github.com/Leandro-Lucena/move-up.git
  ```
- **Ou baixe o repositório** como ZIP diretamente do GitHub e extraia-o em seu diretório preferido.

### 2. Atualizar o arquivo docker-compose.yml

Após clonar o repositório, entre na pasta do projeto e edite o arquivo `docker-compose.yml`. Dentro deste arquivo, localize a seguinte linha que define a variável de ambiente:

```yaml
environment:
  - REACT_NATIVE_PACKAGER_HOSTNAME=<YOUR_IP>
```

Substitua `<YOUR_IP>` pelo IP da máquina onde o Docker estará rodando.

Isso garante que o Expo Go no seu dispositivo móvel consiga se conectar corretamente ao ambiente de desenvolvimento que está rodando no Docker.

### 3. Rodar o `docker-compose`

Agora, com o arquivo `docker-compose.yml` atualizado, dentro do diretório raiz do projeto, execute o seguinte comando no terminal:

```bash
docker-compose up
```

Isso irá iniciar o processo de construção dos containers Docker e baixar todas as dependências necessárias. Esse processo pode demorar um pouco na primeira vez, mas uma vez feito, será mais rápido nas próximas execuções.

### 4. Conectar o smartphone

Abra o Expo Go no seu dispositivo e leia o QR Code que apareceu no terminal do computador para começar a execução do aplicativo.

### 5. Testar o Aplicativo

Após escanear o QR Code com o Expo Go, o Expo iniciará a construção do aplicativo. Isso pode levar algum tempo na primeira vez, mas uma vez que o processo esteja completo, o aplicativo MoveUp estará disponível no seu smartphone para testes.

Agora você pode começar a testar o aplicativo e explorar suas funcionalidades!
