import express from "express";
import { routes } from "./routes";
import { errorHandling } from "./middlewares/error-handling";

const PORT = process.env.API_PORT || 3000;
const app = express();

app.use(express.json());
app.use(routes);

app.use(errorHandling);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
