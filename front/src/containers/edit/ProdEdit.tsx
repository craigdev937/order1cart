import React from "react";
import "./ProdEdit.css";
import { useParams, useNavigate } from "react-router";
import { Form } from "../form/Form";
import { API } from "../../global/API";
import { IData } from "../../models/Interfaces";
import { Spinner } from "../../components/spin/Spinner";

export const ProdEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const PID = id !== undefined ? String(id) : "";
    const [updateProduct] = API.useUpdateMutation();
    const { error, isLoading, 
        data: product } = API.useOneQuery(PID);

    const handleUpdate = async (data: IData) => {
        if (id) {
            await updateProduct({id, ...data});
            navigate("/");
        }
    };

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error :
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    return (
        <React.Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                <main className="edit__container">
                    <h2>Edit Product</h2>
                    <Form 
                        submitLabel="Update Product"
                        initialData={product}
                        onSubmit={handleUpdate}
                    />
                </main>
            )}
        </React.Fragment>
    );
};



