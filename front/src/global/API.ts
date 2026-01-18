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
            providesTags: ["Products"]
        }),
        one: builder.query<IProd, number>({
            query: (id) => ({
                url: `/${id}`,
                method: "GET"
            }),
            providesTags: ["Products"]
        }),
        add: builder.mutation<IProd, IProd>({
            query: (payload) => ({
                url: "/",
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["Products"]
        }),
        update: builder.mutation<IProd, IProd>({
            query: ({id, ...payload}) => ({
                url: `/${id}`,
                method: "PUT",
                body: payload
            }),
            invalidatesTags: ["Products"]
        }),
        delete: builder.mutation<void, number>({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Products"]
        })
    })
});


