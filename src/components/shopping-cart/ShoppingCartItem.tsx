import React from "react";
import { makeStyles } from "@material-ui/styles";
import removeIcon from "../../assets/images/delete-icon.svg";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../reducers/shopping-cart/cart-slice";

const useStyles = makeStyles({
    itemWrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        justifyContent: "center",
        alignItems: "center",

        margin: "0 0.8em 0.5em 0.8em",
        borderRadius: "0.3em",
        backgroundColor: "#F5F6F8",
        boxShadow: "10px 10px 9px -13px rgba(0,0,0,0.75)",
    },
    productImage: {
        gridColumn: "1 / span 2",
        marginLeft: "0.2em",
        border: "1px solid black",
        borderRadius: "0.2em",
        width: 80,
        height: 80,
    },
    productName: {
        gridColumn: "3 / span 5",
        justifySelf: "center",
    },
    productPrice: {
        gridColumn: "8 / span 3",
        justifySelf: "center",
    },
    removeProductIcon: {
        gridColumn: "11 / span 2",
        justifySelf: "center",
        width: 35,
        height: 35,
    },
});

export interface ICartItemProps {
    Id: number;
    ImageUrl: string;
    Name: string;
    Price: number;
}

const ShoppingCartItem = ({
    Id,
    ImageUrl,
    Name,
    Price,
}: ICartItemProps): JSX.Element => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleOnClickRemoveItem = (id: number) => {
        dispatch(removeItemFromCart(id));
    };

    return (
        <li className={classes.itemWrapper}>
            <img
                src={ImageUrl}
                alt="product"
                className={classes.productImage}
            />
            <p className={classes.productName}>{Name}</p>
            <p className={classes.productPrice}>${Price}</p>
            <img
                src={removeIcon}
                alt="remove-product-icon"
                className={classes.removeProductIcon}
                onClick={() => handleOnClickRemoveItem(Id)}
            />
        </li>
    );
};

export default ShoppingCartItem;
