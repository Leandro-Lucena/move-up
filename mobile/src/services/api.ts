import axios from "axios";
import Constants from "expo-constants";

const { API_HOST = 'localhost', API_PORT = '3000' } = (Constants.expoConfig?.extra) || {};

const apiUrl = `http://${API_HOST}:${API_PORT}`;
console.log("API URL:", apiUrl);

export const api = axios.create({
  baseURL: apiUrl,
  timeout: 1000,
});
