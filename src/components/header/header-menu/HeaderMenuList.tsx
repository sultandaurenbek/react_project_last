import React from "react";
import HeaderMenuListItem from "./HeaderMenuListItem";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    navigationWrapper: {
        display: "grid",
    },
    navigationBar: {
        display: "flex",
        height: "100%",
    },
});

const HeaderMenuList = (): JSX.Element => {
    const classes = useStyles();

    return (
        <ul className={classes.navigationBar}>
            <HeaderMenuListItem pageName="Products" pageUrl="/products" />

            <HeaderMenuListItem pageName="My Orders" pageUrl="/orders" />

            <HeaderMenuListItem
                pageName="Add Product"
                pageUrl="/products/add"
            />
        </ul>
    );
};

export default HeaderMenuList;
