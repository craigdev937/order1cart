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
        })
    })
});


