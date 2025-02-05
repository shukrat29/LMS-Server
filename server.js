import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

const PORT = process.env.PORT || 8000;

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is a live");
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at port ${PORT} successfully`);
});
