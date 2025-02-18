import fs from "fs";

const appConfig = JSON.parse(fs.readFileSync("./app.json", "utf8"));

appConfig.expo.extra = {
  API_PORT: process.env.API_PORT || "3000",
  API_HOST: process.env.REACT_NATIVE_PACKAGER_HOSTNAME || "localhost",
};

fs.writeFileSync("app.json", JSON.stringify(appConfig, null, 2));
