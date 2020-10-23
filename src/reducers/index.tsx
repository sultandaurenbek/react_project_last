import { combineReducers } from "redux";
import productsPageSlice from "./products/products-page-slice";
import headerSlice from "./header/header-slice";
import myOrdersSlice from "./myOrders/my-orders-slice";
import shoppingCartSlice from "./shopping-cart/cart-slice";

const rootReducer = combineReducers({
    productsPage: productsPageSlice.reducer,
    header: headerSlice.reducer,
    myOrdersState: myOrdersSlice.reducer,
    shoppingCart: shoppingCartSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
