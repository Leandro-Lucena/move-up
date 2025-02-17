import "dotenv/config";

export default {
  expo: {
    name: "move-up",
    slug: "move-up",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    splash: {
      image: "./assets/images/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#1E88E5",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.anonymous.moveup",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#1E88E5",
      },
      package: "com.anonymous.moveup",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: ["expo-router", "expo-font"],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      API_PORT: process.env.API_PORT || "3000",
      API_HOST: process.env.REACT_NATIVE_PACKAGER_HOSTNAME || "localhost",
    },
  },
};
