# MoveUp

MoveUp is an app that allows users to discover gyms, martial arts studios, sports centers and other establishments dedicated to health, allowing users to find activities, training and products to improve their physical fitness and quality of life.

This project aims to test and present knowledge acquired in modern software development technologies.

## Technologies Used

### Frontend

- **React Native**: A framework for developing cross-platform mobile apps.
- **Expo**: A tool for rapid development and easy development of React Native apps.

### Backend

- **Node.js**: A runtime environment for JavaScript on the server.
- **Express**: A minimalistic framework for Node.js, used to build the API.
- **Prisma**: An ORM (Object Relational Mapping) for facilitating interaction with the database.
- **SQLite**: A lightweight, embedded relational database, used for data persistence in the backend.

### Containerization

- **Docker**: Used for containerizing the development environment, ensuring a consistent and easily replicable environment.

## Project Goal

This project is developed with the purpose of **demonstrating technical skills** and **showcasing proficiency in the use of modern development tools**.

It is not a production-ready project or a commercial app, but rather an opportunity to learn, test and demonstrate the use of these technologies in a practical environment.

### **Important Notes**

- The container is not optimized for production, but rather a practical solution for local development.
  To facilitate testing in the development environment, a .sh script was created that starts both Node.js and Expo when mounting the container. This simplifies the execution of the project and avoids the need to run multiple containers separately.

- The user's location and all addresses and geolocations of establishments shown in the app are **fictional**. The city of **Campo Grande - MS** was chosen for testing purposes on the map, but the locations and data displayed do not correspond to real places. If there is any similarity with real establishments or places, it is **mere coincidence**.

## Test on your own machine

### Prerequisites

Before running the project, make sure you have the following requirements:

- **Docker**: Docker must be installed on your machine. [Install Docker](https://www.docker.com/get-started).
- **Smartphone with Expo Go**: An Android or iPhone device with the [Expo Go](https://expo.dev/tools#expo-go) app installed.
- The device must be **connected to the same LAN network** as the machine that will run the Docker image.

### 1. Clone the repository

First, clone the repository to your local machine. You can do this in two ways:

- **Using Git**:
  ```bash
  git clone https://github.com/Leandro-Lucena/move-up.git
  ```
- **Or download the repository** as a ZIP directly from GitHub and extract it to your preferred directory.

### 2. Update the docker-compose.yml file

After cloning the repository, enter the project directory and edit the `docker-compose.yml` file. Inside this file, locate the following line that defines the environment variable:

```yaml
environment:
  - REACT_NATIVE_PACKAGER_HOSTNAME=<YOUR_IP>
```

Replace `<YOUR_IP>` with the IP of the machine where Docker will be running.

This ensures that Expo Go on your mobile device can connect correctly to the development environment running on Docker.

### 3. Run `docker-compose`

Now, with the `docker-compose.yml` file updated, within the root directory of the project, execute the following command in the terminal:

```bash
docker-compose up
```

This will start the process of building the Docker containers and downloading all the necessary dependencies. This process may take a while the first time, but once done, it will be faster in subsequent executions.

### 4. Connect the smartphone

Open Expo Go on your device and scan the QR Code that appeared in the computer terminal to start running the application.

### 5. Test the Application

After scanning the QR Code with Expo Go, Expo will start building the application. This may take some time the first time, but once the process is complete, the MoveUp app will be available on your smartphone for testing.

Now you can start testing the app and exploring its features!
