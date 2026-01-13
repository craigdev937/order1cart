import express from "express";
import { PRODUCTS } from "../controllers/ProdCTR";

export const prodRt: express.Router = express.Router();
    prodRt.post("/", PRODUCTS.Create);
    prodRt.get("/", PRODUCTS.FetchAll);
    prodRt.get("/:id", PRODUCTS.GetOne);
    prodRt.put("/:id", PRODUCTS.Update);
    prodRt.delete("/:id", PRODUCTS.Delete);


