import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/header/header";
import ProductsPage from "./components/products-page/Products";
import AddProductPage from "./components/add-product-page/AddProductPage";
import MyOrders from "./components/my-orders/MyOrders";
import Cart from "./components/header/header-cart/cart";

const useStyles = makeStyles({
    root: {
        minWidth: "80%",
        height: "auto",
    },
});

const App = (): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Cart />
            <Route exact path="/products" render={() => <ProductsPage />} />
            <Route
                exact
                path="/products/add"
                render={() => <AddProductPage />}
            />
            <Route exact path="/orders" render={() => <MyOrders />} />
        </div>
    );
};

export default App;
