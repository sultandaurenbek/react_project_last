import { createSlice } from "@reduxjs/toolkit";
import { IHeaderStateProps } from "./header-interfaces";

const headerInitialState: IHeaderStateProps = {
    cart: {
        totalPrice: 0,
        cartItemsCount: 0,
    },
};

const headerSlice = createSlice({
    name: "headerSlice",
    initialState: headerInitialState,
    reducers: {},
});

export default headerSlice;
