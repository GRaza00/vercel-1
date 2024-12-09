import express from "express";

//connectDB
import connectDB from "./utils/connectDB.js";

//middleware
import cors from "cors";
import path from "path";

//Router
import auth from "./routes/auth.js";
import admin from "./routes/admin.js";

const app = express();

//port
const port = 8080;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use("/path", (req, res) => {
  res.json({ path: path.resolve() });
});

//router
app.use("/api/auth", auth);
app.use("/api/admin", admin);

//server listen
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Listen On port ${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
