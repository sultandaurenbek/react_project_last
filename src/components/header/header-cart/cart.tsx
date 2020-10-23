import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import cartImg from "../../../assets/images/cart.svg";
import circle from "../../../assets/images/circle.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import ShoppingCart from "../../shopping-cart/ShoppingCart";

const UseStyles = makeStyles({
    root: {},
    cartWrapper: {
        position: "absolute",
        top: 10,
        right: 6,
        "&:hover": {
            cursor: "pointer",
        },
    },
    cart: {
        position: "relative",
        top: 0,
        right: 0,
    },
    circle: {
        position: "relative",
        top: 7,
        right: 15,
    },
    counter: {
        position: "relative",
        bottom: 16,
        left: 46,
        width: 20,
        color: "#FFFFFF",
    },
    cartPopupWrapper: {},
});

const Cart = (): JSX.Element => {
    const [isShoppingCartVisible, setVisibility] = useState(false);

    const selectCartItemsCount = (state: RootState) =>
        state.shoppingCart.productsIds.length;

    const cartItemsCount = useSelector((state: RootState) =>
        selectCartItemsCount(state)
    );

    const handleClickDisplayCart: React.MouseEventHandler = () => {
        setVisibility(true);
    };

    const hideCart = () => {
        setVisibility(false);
    };

    const classes = UseStyles();
    return (
        <div className={classes.root}>
            <div
                className={classes.cartWrapper}
                onClick={handleClickDisplayCart}
            >
                <img className={classes.cart} src={cartImg} alt="cart" />
                <img
                    className={classes.circle}
                    src={circle}
                    alt="items-count"
                />
                <p className={classes.counter}>{cartItemsCount}</p>
            </div>

            <div className={classes.cartPopupWrapper}>
                {isShoppingCartVisible ? (
                    <ShoppingCart hideCart={hideCart} />
                ) : null}
            </div>
        </div>
    );
};

export default Cart;
