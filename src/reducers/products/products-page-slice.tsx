import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewProductData } from "../../components/add-product-page/AddProductPage";

export interface IProduct {
    id: number;
    name: string;
    type: string;
    price: number;
    image: string;
    [key: string]: any;
}

interface IProductsState {
    products: Array<IProduct>;
}

const productsInitialState: IProductsState = {
    products: [
        {
            id: 1,
            name: "Iphone XR",
            type: "iphone",
            price: 500,
            image:
                "https://object.pscloud.io/cms/cms/Photo/img_0_77_1739_0.jpg",
        },
        {
            id: 2,
            name: "Apple Iphone 11",
            type: "iphone",
            price: 600,
            image:
                "https://object.pscloud.io/cms/cms/Photo/img_0_77_2121_0.jpg",
        },
        {
            id: 3,
            name: "Apple Watch SE",
            type: "watch",
            price: 350,
            image:
                "https://object.pscloud.io/cms/cms/Photo/img_0_911_453_0_1.jpg",
           
        },
        {   
            id: 4,
            name: "Apple Watch Series 3",
            type: "watch",
            price: 250,
            image:
                "https://object.pscloud.io/cms/cms/Photo/img_0_911_185_0.jpg",
            
        },
        {
            id: 5,
            name: "Apple Ipad Air",
            type: "ipad",
            price: 500,
            image:
                "https://object.pscloud.io/cms/cms/Photo/img_0_64_277_2.jpg",
        },
        {
            id: 6,
            name: "Apple Ipad Pro",
            type: "ipad",
            price: 1000,
            image:
                "https://object.pscloud.io/cms/cms/Photo/img_0_64_580_0.jpg",
        },
    ],
};

const productsPageSlice = createSlice({
    name: "products",
    initialState: productsInitialState,
    reducers: {
        addProduct(state, action: PayloadAction<NewProductData>) {
            const lastId = state.products.length;
            const newProduct: IProduct = {
                id: lastId + 1,
                name: action.payload.name,
                price: action.payload.price,
                image: action.payload.imageUrl,
                type: action.payload.type,
            };

            state.products.push(newProduct);
        },
    },
});

export const { addProduct } = productsPageSlice.actions;
export default productsPageSlice;
