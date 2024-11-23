import express, { Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";
import specs from "./config/swagger.config";
import initializeDatabaseandServer from "./data-source";
import categoryRoute from "./routes/category.route";
import expenseRoute from "./routes/expense.route";
import incomeRoute from "./routes/income.route";
import authRoute from "./routes/auth.route";
import goalRoute from "./routes/goal.route";
import transactionRoute from "./routes/transaction.route";
import { errorHandler } from "./errors/errorHandlers";

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1", categoryRoute);
app.use("/api/v1", expenseRoute);
app.use("/api/v1", incomeRoute);
app.use("/api/v1", goalRoute);
app.use("/api/v1", transactionRoute);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(errorHandler);

initializeDatabaseandServer(app);
export { app };
