export interface IProd {
    id?: number | string,
    name: string,
    description: string,
    image: string,
    price: string,
    stock: number
};

export interface IProduct extends IProd {
    success: boolean,
    count: number,
    data: IProd[]
};



