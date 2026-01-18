import "./AddProd.css";
import { useNavigate } from "react-router";
import { Form } from "../form/Form";
import { API } from "../../global/API";
import { IProd } from "../../models/Interfaces";
import { ProdSType } from "../../validation/Schema";

export const AddProd = () => {
    const navigate = useNavigate();
    const [addProduct] = API.useAddMutation();

    const handleAdd = async (data: ProdSType) => {
        await addProduct(data);
        console.log(data);
        navigate("/");
    };

    return (
        <main className="add__container">
            <h2 className="add__title">Add Product</h2>
            <Form 
                submitLabel="Add Product"
                onSubmit={handleAdd}
            />
        </main>
    );
};


