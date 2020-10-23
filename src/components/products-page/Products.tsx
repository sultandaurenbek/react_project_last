import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import Product from "./ProductCard";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        productsWrapper: {
            display: "grid",
            [theme.breakpoints.between("lg", "xl")]: {
                gridTemplateColumns: "repeat(3, 300px)",
            },
            [theme.breakpoints.up("xl")]: {
                gridTemplateColumns: "repeat(4, 300px)",
            },
            justifyItems: "center",
            justifyContent: "center",
            gap: "3em 5em",
            marginTop: 60,
            marginBottom: 60,
        },
    })
);

const Products = (): JSX.Element => {
    const classes = useStyles();

    const allProducts = useSelector(
        (state: RootState) => state.productsPage.products
    );

    const productsElements = allProducts.map((product) => {
        return (
            <Product
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                
            />
        );
    });

    return <div className={classes.productsWrapper}>{productsElements}</div>;
};

export default Products;
