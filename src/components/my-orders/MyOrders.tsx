import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { makeStyles } from "@material-ui/styles";
import { IOrder } from "../../reducers/myOrders/my-orders-slice";
import Order from "./Order";

const useStyles = makeStyles({
    root: {
        padding: "5.5em",
        paddingTop: "2.5em",
        "& h1": {
            padding: "1em",
            color: "#FFFFFF",
            backgroundColor: "#ED1C24",
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: 24,
            lineHeight: "28px",
        },
    },
});

const MyOrders = (): JSX.Element => {
    const allOrders: IOrder[] = useSelector(
        (state: RootState) => state.myOrdersState.myOrders
    );

    const orderElements = allOrders.map((order: IOrder) => {
        return (
            <Order
                key={order.id}
                id={order.id}
                products={order.products}
                totalPrice={order.totalPrice}
                status={order.status}
            />
        );
    });

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>My Orders</h1>
            <ul>{orderElements}</ul>
        </div>
    );
};

export default MyOrders;
