import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartInitialState {
    productsIds: number[];
}

const shoppingCartInitialState: ICartInitialState = {
    productsIds: [],
};

const shoppingCartSlice = createSlice({
    name: "cartSlice",
    initialState: shoppingCartInitialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<number>) {
            state.productsIds.push(action.payload);
        },
        removeItemFromCart(state, action: PayloadAction<number>) {
            const itemToRemoveIndex = state.productsIds.findIndex(
                (pId: number) => {
                    return pId === action.payload;
                }
            );

            state.productsIds.splice(itemToRemoveIndex, 1);
        },
        resetCart(state) {
            state.productsIds = [];
        },
    },
});

export const {
    addItemToCart,
    removeItemFromCart,
    resetCart,
} = shoppingCartSlice.actions;
export default shoppingCartSlice;
