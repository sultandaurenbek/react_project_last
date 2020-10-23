import React from "react";
import { IProduct } from "./../../reducers/products/products-page-slice";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    orderListItem: {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        alignItems: "center",
        justifyItems: "center",
        border: "2px solid #C4C4C4",
        fontSize: 18,
        marginTop: 7,
        "&:first-child": {
            marginTop: "2em",
        },
        overflow: "hidden",
    },
    cell: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "1.5em 0",
        borderRight: "2px solid #C4C4C4",
        "&:last-child": {
            borderRight: "none",
        },
    },
    orderId: {
        gridColumn: "1 / span 2",
    },
    productsList: {
        gridColumn: "3 / span 5",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "start",
    },
    product: {
        width: "100%",
        marginLeft: "2.5em",
    },
    price: {
        gridColumn: "8 / span 2",
    },
    status: {
        gridColumn: "10 / span 3",
    },
});

type TProps = {
    id: number;
    products: IProduct[];
    totalPrice: number;
    status: string;
};

const Order = ({ id, products, totalPrice, status }: TProps): JSX.Element => {
    const classes = useStyles();
    const productsNames = products.map((product: IProduct) => {
        return (
            <li key={product.id} className={classes.product}>
                -{product.name}
            </li>
        );
    });

    const roundedTotalPrice = totalPrice.toFixed(2);
    return (
        <li className={classes.orderListItem}>
            <div className={`${classes.orderId} ${classes.cell}`}>
                <p>Order # {id}</p>
            </div>
            <ul className={`${classes.productsList} ${classes.cell}`}>
                {productsNames}
            </ul>
            <div className={`${classes.price} ${classes.cell}`}>
                <p>{roundedTotalPrice}</p>
            </div>
            <div className={`${classes.status} ${classes.cell}`}>
                <p>{status}</p>
            </div>
        </li>
    );
};

export default Order;
