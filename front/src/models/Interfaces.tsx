export interface IProd {
    id: number,
    name: string,
    description: string,
    image: string,
    price: string,
    stock: number,
    created_at: string,
    updated_at: string
};

export interface IProduct extends IProd {
    success: boolean,
    count: number,
    data: IProd[]
};



