export interface GetProductDetails {
    author:     Author;
    categories: string[];
    itemDetail: ItemDetail;
}

export interface Author {
    name:     string;
    lastname: string;
}

export interface ItemDetail {
    id:            string;
    title:         string;
    price:         Price;
    picture:       string;
    condition:     string;
    free_shipping: boolean;
    sold_quantity: string;
    description:   string;
}

export interface Price {
    currency: string;
    amount:   string;
    decimals?: string;
}
