import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router";
import { NotFound } from "../components/NotFound";
import { Navbar } from "./Navbar";
import { AddProd } from "../containers/add/AddProd";
import { PEdit } from "../containers/edit/PEdit";
import { ProdInfo } from "../containers/info/ProdInfo";
import { Products } from "../pages/prod/Products";
import { Customers } from "../pages/customers/Customers";

const RouteList = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Products />
            },
            {
                path: "/addprod",
                element: <AddProd />
            },
            {
                path: "/pinfo/:id",
                element: <ProdInfo />
            },
            {
                path: "/pedit/:id",
                element: <PEdit />
            },
            {
                path: "/customers",
                element: <Customers />
            }
        ]
    }
]);

export const NavRoutes = () => {
    return (
        <React.Fragment>
            <RouterProvider router={RouteList} />
        </React.Fragment>
    );
};



