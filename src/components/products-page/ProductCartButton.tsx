import React from "react";
import ProductCart from "../../assets/images/cart-product.svg";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { IProduct } from "../../reducers/products/products-page-slice";
import { addItemToCart } from "../../reducers/shopping-cart/cart-slice";

const useStyles = makeStyles({
    cartWrapper: {
        display: "flex",
        flex: "0 0 100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ED1C24",
        "& img": {
            flex: "0 0 40px",
            height: 40,
        },
        "&:hover": {
            cursor: "pointer",
        },
    },
});

type TProps = {
    productId: number;
};

const ProductCartButton = ({ productId }: TProps): JSX.Element => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const products = useSelector(
        (state: RootState) => state.productsPage.products
    );

    const handleClick: React.MouseEventHandler = (e) => {
        const product = products.find((p: IProduct) => p.id === productId);

        if (product === undefined) {
            throw new Error("Product not found.");
        }

        dispatch(addItemToCart(product.id));
    };

    return (
        <div className={classes.cartWrapper} onClick={handleClick}>
            <img src={ProductCart} alt="product-cart" />
        </div>
    );
};

export default ProductCartButton;
