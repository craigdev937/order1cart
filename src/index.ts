import "dotenv/config";
import express from "express";
import path from "path";
import favicon from "serve-favicon";
import helmet from "helmet";
import logger from "morgan";
import { ERR } from "./middleware/midError";
import { prodRt } from "./routes/ProdRT";

(async () => {
    const app: express.Application = express();
    app.use(favicon(path.join(__dirname, "../public", "favicon.ico")));
    app.use(helmet());

    // CORS Setup
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods",
                "POST, GET, PUT, PATCH, DELETE");
            res
                .status(res.statusCode)
                .json({ "status message": "OK" });
        };
        next();
    });

    app.use(express.urlencoded());
    app.use(express.json());
    app.use(logger("dev"));
    app.use("/api/products", prodRt);
    app.use(ERR.notFound);
    app.use(ERR.errHandler);

    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    });
})();





