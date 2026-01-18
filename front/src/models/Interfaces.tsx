export interface IData {
    name: string,
    description: string,
    image: string,
    price: string,
    stock: number
};

export interface IProd extends IData {
    id: number | string
}

export interface IProduct extends IProd {
    success: boolean,
    count: number,
    data: IProd[]
};



