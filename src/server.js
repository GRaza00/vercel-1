import express from "express";

//connectDB
import connectDB from "./utils/connectDB.js";

//Router
import auth from "./routes/auth.js";
import admin from "./routes/admin.js";
import client from "./routes/client.js";

//middleware
import cors from "cors";
import cookieParser from "cookie-parser";
import authenticate from "./middleware/authenticate.js";
import logData from "./middleware/logData.js";

const app = express();

//port
const port = 8080;

//middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logData);

//router
app.use("/api/auth", auth);
app.use("/api/admin", admin);
app.use("/api/client", client);

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
