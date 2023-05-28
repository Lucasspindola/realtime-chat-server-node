import "reflect-metadata";
import express from "express";
import "express-async-errors";
import handleError from "./errors/handleError";
import usersRoutes from "./routes/users.routes";
import sessionRoutes from "./routes/session.routes";
import messagesRoutes from "./routes/messages.routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", usersRoutes);
app.use("/session", sessionRoutes);
app.use("/messages", messagesRoutes);
app.use(handleError);
export default app;
