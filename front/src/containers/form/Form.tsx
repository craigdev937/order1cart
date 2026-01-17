import "./Form.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProdSchema, ProdSType } from "../../validation/Schema"; 
import { IProd } from "../../models/Interfaces";

type Props = {
    submitLabel?: string,
    initialData?: IProd,
    onSubmit: (data: IProd) => void
};

export const Form = 
({ submitLabel="Create", initialData, onSubmit }: Props) => {
    const { register, handleSubmit,
        formState: { errors } } = useForm<ProdSType>({
            defaultValues: initialData,
            resolver: zodResolver(ProdSchema)
        });

    return (
        <form 
            className="form__container"
            onSubmit={handleSubmit(onSubmit)}
        >
            <section className="form__group">
                <label htmlFor="Name">Name</label>
                <input id="name" {...register("name")} />
                {errors.name && 
                    <span className="error"
                    >{errors.name.message}
                </span>}
            </section>
            <section className="form__group">
                <label htmlFor="description">Description</label>
                <input id="description" {...register("description")} />
                {errors.description && 
                    <span className="error"
                    >{errors.description.message}
                </span>}
            </section>
            <section className="form__group">
                <label htmlFor="image">Image</label>
                <input id="image" {...register("image")} />
                {errors.image && 
                    <span className="error"
                    >{errors.image.message}
                </span>}
            </section>
            <section className="form__group">
                <label htmlFor="price">Price</label>
                <input id="price" {...register("price")} />
                {errors.price && 
                    <span className="error"
                    >{errors.price.message}
                </span>}
            </section>
            <section className="form__group">
                <label htmlFor="stock">Stock</label>
                <input id="stock" {...register("stock")} />
                {errors.stock && 
                    <span className="error"
                    >{errors.stock.message}
                </span>}
            </section>
            <button 
                type="submit"
                className="btn"
            >{submitLabel}
            </button>
        </form>
    );
};





