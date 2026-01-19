import express from "express";
import { dBase } from "../db/DataBase";
import { ProdSchema, ProdSType } from "../validation/Zod";

class ProdClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const P = ProdSchema.parse(req.body);
            const QRY = `INSERT INTO products
            (name, description, image, price, stock)
            VALUES ($1, $2, $3, $4, $5) RETURNING *`;
            const values = [P.name, P.description, 
                P.image, P.price, P.stock];
            const product = await dBase.query<ProdSType>(QRY, values);
            return res
                .status(res.statusCode)
                .json({
                    success: true,
                    message: "Product Created!",
                    data: product.rows[0]
                });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error retrieving Products!",
                    error: error instanceof Error ? 
                        error.message : "Unknown error!"
                });
            return next(error)
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            const QRY = `SELECT * FROM products ORDER BY id ASC`;
            const products = await dBase.query<ProdSType[]>(QRY);
            return res
                .status(res.statusCode)
                .json({
                    success: true,
                    count: products.rows.length,
                    data: products.rows
                });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error retrieving Products!",
                    error: error instanceof Error ? 
                        error.message : "Unknown error!"
                });
            return next(error);
        }
    };

    GetOne: express.Handler = async (req, res, next) => {
        try {
            const { id } = req.params;
            const QRY = `SELECT * FROM products WHERE id = $1`;
            const values = [id];
            const product = await dBase.query<ProdSType>(QRY, values);
            return res
                .status(res.statusCode)
                .json(product.rows[0]);
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error retrieving Products!",
                    error: error instanceof Error ? 
                        error.message : "Unknown error!"
                });
            return next(error);
        }
    };

    Update: express.Handler = async (req, res, next) => {
        try {
            const P = ProdSchema.parse(req.body);
            const { id } = req.params;
            const QRY = `UPDATE products
            SET name = $1, description = $2, image = $3,
            price = $4, stock = $5
            WHERE id = $6 RETURNING *`;
            const values = [P.name, P.description, 
                P.image, P.price, P.stock, id];
            const product = await dBase.query<ProdSType>(QRY, values);
            return res
                .status(res.statusCode)
                .json(product.rows[0]);
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error retrieving Products!",
                    error: error instanceof Error ? 
                        error.message : "Unknown error!"
                });
            return next(error);
        }
    };

    Delete: express.Handler = async (req, res, next) => {
        try {
            const { id } = req.params;
            const QRY = "DELETE FROM products WHERE id = $1";
            const values = [id];
            const deleteProduct = await dBase.query<ProdSType>(QRY, values);
            return res
                .status(res.statusCode)
                .json({
                    success: true,
                    message: "The Product was Deleted!",
                    data: deleteProduct
                });
        } catch (error) {
            res
                .status(res.statusCode)
                .json({
                    success: false,
                    message: "Error retrieving Products!",
                    error: error instanceof Error ? 
                        error.message : "Unknown error!"
                });
            return next(error);
        }
    };
};

export const PRODUCTS: ProdClass = new ProdClass();



