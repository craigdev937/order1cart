import React from "react";
import "./Products.css";
import { useNavigate } from "react-router";
import { API } from "../../global/API";
import { Spinner } from "../../components/spin/Spinner";

export const Products = () => {
    const navigate = useNavigate();
    const { error, isLoading, data } = API.useGetQuery();
    const PR = data?.data;

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
                <main className="prod__container">
                    <section className="prod__grid">
                        {PR && PR.map((prod) => (
                            <aside 
                                key={prod.id}
                                className="prod__card"
                            >
                                <section className="prod__header">
                                    <aside className="prod__name">
                                        {prod.name}
                                    </aside>
                                    <button
                                        className="btn btn__small btn__sec"
                                        onClick={() => navigate("/addprod")}
                                        >Add Product
                                    </button>
                                </section>

                                {/* CONTAINER QUERY FOR PROD__INFO SECTION */}
                                <section className="prod__info">
                                    <aside className="prod__description">
                                        {prod.description}
                                    </aside>
                                    <aside className="prod__block">
                                        <div className="prod__price">
                                            Price: ${prod.price}
                                        </div>
                                        <div className="prod__stock">
                                            In-stock: {prod.stock}
                                        </div>
                                    </aside>
                                    <aside className="prod__image">
                                        <img 
                                            alt={prod.name}
                                            src={prod.image}  
                                        />
                                    </aside>
                                </section>
                                {/* CRUD BUTTONS FOR PROD__ACTIONS */}
                                <section className="prod__actions">
                                    <button
                                        className="btn btn__small btn__sec"
                                        >View
                                    </button>
                                    <button
                                        className="btn btn__small btn__sec"
                                        >Edit
                                    </button>
                                    <button
                                        className="btn btn__small btn__sec"
                                        >Delete
                                    </button>
                                </section>
                            </aside>
                        ))}
                    </section>
                </main>
            )}
        </React.Fragment>
    );
};


