import React from "react";
import "./ProdInfo.css";
import { useParams, useNavigate } from "react-router";
import { API } from "../../global/API";
import { Spinner } from "../../components/spin/Spinner";

export const ProdInfo = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const PID = id !== undefined ? Number(id) : 0;
    const { error, isLoading, data: pinfo } = API.useOneQuery(PID);
    const IN = pinfo!;

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
            <main className="pinfo__container">
                <h2>View Product</h2>
                <section className="pinfo__view">
                    <aside className="pinfo__field">
                        <div className="pinfo__label">Name</div>
                        <div className="pinfo__value">{IN.name}</div>
                    </aside>
                    <aside className="pinfo__field">
                        <div className="pinfo__label">Description</div>
                        <div className="pinfo__value">{IN.description}</div>
                    </aside>
                    <aside className="pinfo__field">
                        <div className="pinfo__label">Price</div>
                        <div className="pinfo__value">{IN.price}</div>
                    </aside>
                    <aside className="pinfo__field">
                        <div className="pinfo__img">
                            <img 
                                alt={IN.name}
                                src={IN.image} 
                            />
                        </div>
                    </aside>
                </section>
            </main>
        )}
    </React.Fragment>
    );
};


