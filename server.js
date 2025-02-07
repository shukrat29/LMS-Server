import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dbConnect } from "./config/dbConfig.js";
import authRoute from "./routes/authRoute.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { responseClient } from "./middleware/responseClient.js";

const app = express();

const PORT = process.env.PORT || 8000;

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// api endpoints
app.use("/api/v1/auth", authRoute);

// checking server is live
app.get("/", (req, res) => {
  const message = "Server is live";
  responseClient({ req, res, message });
});

// global error handler
app.use(errorHandler);

// DB connect and Server start
dbConnect()
  .then(() => {
    app.listen(PORT, (error) => {
      error
        ? console.log(error)
        : console.log("Server is running at http://localhost:" + PORT);
    });
  })
  .catch((error) => console.log(error));
