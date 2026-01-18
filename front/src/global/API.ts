import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProd, IProduct } from "../models/Interfaces";
const URL = "http://localhost:9000/api/products";

export const API = createApi({
    reducerPath: "API",
    tagTypes: ["Products"],
    baseQuery: fetchBaseQuery({ baseUrl: `${URL}` }),
    endpoints: (builder) => ({
        get: builder.query<IProduct, void>({
            query: () => ({
                url: "/",
                method: "GET"
            }),
            providesTags: (result) => result ? [
                ...result.data.map(({ id }) => 
                    ({ type: "Products" as const, id })),
                { type: "Products", id: "LIST" },
            ] : [{ type: "Products", id: "LIST" }]
        }),
        one: builder.query<IProd, number>({
            query: (id) => ({
                url: `/${id}`,
                method: "GET"
            }),
            providesTags: (result, error, id) =>
                [{ type: "Products", id }]
        }),
        add: builder.mutation<IProd, IProd>({
            query: (payload) => ({
                url: "/",
                method: "POST",
                body: payload
            }),
            invalidatesTags: [{ type: "Products", id: "LIST" }]
        }),
        update: builder.mutation<IProd, IProd>({
            query: ({id, ...payload}) => ({
                url: `/${id}`,
                method: "PUT",
                body: payload
            }),
            invalidatesTags: [{ type: "Products", id: "LIST" }]
        }),
        delete: builder.mutation<void, number>({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [{ type: "Products", id: "LIST" }]
        })
    })
});


