import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../reducers/shopping-cart/cart-slice";
import { addOrder } from "../../reducers/myOrders/my-orders-slice";
import closeIcon from "../../assets/images/close-icon.svg";
import cartIcon from "../../assets/images/cart.svg";
import ShoppingCartItem from "./ShoppingCartItem";
import { RootState } from "../../reducers";
import { IProduct } from "./../../reducers/products/products-page-slice";
import { createSelector } from "reselect";

const useStyles = makeStyles({
    cartWrapper: {
        width: "100%",
        minHeight: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& p": {
            fontSize: 18,
        },
    },
    cart: {
        position: "relative",
        backgroundColor: "white",
        maxHeight: 600,
        minHeight: 200,
        width: 800,
        borderRadius: 10,
    },
    heading: {
        backgroundColor: "#ED1C24",
        margin: "0.5em 0.5em 1em 0.5em",
        padding: "1em",
        borderRadius: "0.3em",

        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        color: "#FFFFFF",
        boxShadow: "10px 10px 9px -6px rgba(0,0,0,0.75)",
    },
    closeIcon: {
        position: "absolute",
        top: -15,
        left: -15,
        width: 30,
        height: 30,
    },
    itemsWrapper: {
        minHeight: 100,
        maxHeight: 400,
        overflow: "hidden",
        overflowY: "auto",
    },
    emptyCartWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 100,
        "& img": {
            marginRight: "0.5em",
        },
    },
    completeButton: {
        margin: "0.2em",
        padding: "1em",
        backgroundColor: "#16db6b",
        textAlign: "center",
        borderRadius: 10,
        color: "#ffffff",
    },
    completeButtonActive: {
        backgroundColor: "#16db6b",
        color: "#ffffff",
    },
    completeButtonInactive: {
        backgroundColor: "#aaaba9",
        color: "#000000",
    },
});

export interface INewOrderInfo {
    products: IProduct[];
    totalPrice: number;
}

type TProps = {
    hideCart: () => void;
};

const ShoppingCart = ({ hideCart }: TProps): JSX.Element => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const selectCartProductsIds = (state: RootState) =>
        state.shoppingCart.productsIds;

    const selectProducts = (state: RootState) => state.productsPage.products;

    const selectProductsInCart = createSelector(
        [selectCartProductsIds, selectProducts],
        (productsIds, products) => {
            const productsInCart = products.filter((p: IProduct) =>
                productsIds.includes(p.id)
            );

            return productsInCart;
        }
    );

    const selectOrderTotalSum = createSelector(
        [selectProductsInCart],
        (productsInCart) => {
            return productsInCart.reduce((totalPrice, product) => {
                return totalPrice + product.price;
            }, 0);
        }
    );

    const itemsInCart = useSelector((state: RootState) =>
        selectProductsInCart(state)
    );

    const orderTotalSum = useSelector((state: RootState) =>
        selectOrderTotalSum(state)
    );

    const handleCompleteButtonOnClick: React.MouseEventHandler = () => {
        if (itemsInCart.length === 0) {
            return;
        }

        const newOrderInfo: INewOrderInfo = {
            products: itemsInCart,
            totalPrice: orderTotalSum,
        };

        dispatch(addOrder(newOrderInfo));
        dispatch(resetCart());
    };

    return (
        <div className={classes.cartWrapper} id="shopping-cart">
            <div className={classes.cart}>
                <img
                    className={classes.closeIcon}
                    src={closeIcon}
                    alt="close-icon"
                    onClick={hideCart}
                />
                <h1 className={classes.heading}>Shopping Cart</h1>
                <ul className={classes.itemsWrapper}>
                    {itemsInCart.length > 0 ? (
                        itemsInCart.map((i: IProduct) => {
                            return (
                                <ShoppingCartItem
                                    key={i.id}
                                    Id={i.id}
                                    ImageUrl={i.image}
                                    Name={i.name}
                                    Price={i.price}
                                />
                            );
                        })
                    ) : (
                        <div className={classes.emptyCartWrapper}>
                            <img src={cartIcon} alt="shopping-cart-icon" />
                            <p>Your shopping cart is empty</p>
                        </div>
                    )}
                </ul>
                <p
                    className={
                        itemsInCart.length === 0
                            ? `${classes.completeButton} ${classes.completeButtonInactive}`
                            : classes.completeButton
                    }
                    onClick={handleCompleteButtonOnClick}
                >
                    Complete Order
                </p>
            </div>
        </div>
    );
};

export default ShoppingCart;
