import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

import { errorHandler } from "./middlewares";
import { APP_PORT, DB_URL } from "../config";
import {
  userRoutes,
  notificationRoutes,
  messageCategoryRoutes,
  logRoutes,
} from "./routes";
import { loadData } from "./utils";

const app = express();

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    loadData();
    console.log("DB Connected");
  })
  .catch((err) => console.log("DB Connection Error = ", err));

//middlewares
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

//routes middleware
app.use("/api/users", userRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/logs", logRoutes);
app.use("/api/message-categories", messageCategoryRoutes);

app.use(errorHandler);

app.listen(process.env.PORT || APP_PORT, () =>
  console.log(`Listening on port ${APP_PORT}.`)
);
