import React from "react";
import ProductCartButton from "./ProductCartButton";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    productItem: {
        display: "flex",
        flexWrap: "wrap",
        flex: "0 0 100%",
        height: 400,
    },
    productImage: {
        width: "100%",
        height: "80%",
    },
    propertyWrapper: {
        display: "inline-grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        width: "100%",
        height: "20%",
        backgroundColor: "#E2E2E2",
    },
    nameWrapper: {
        gridColumnStart: "1",
        gridColumnEnd: "4",
        alignSelf: "center",
    },
    productName: {
        fontFamily: "Roboto",
        fontSize: 18,
        lineHeight: "26.95px",
        textAlign: "center",
    },
});

type TProps = {
    id: number;
    image: string;
    name: string;
};

const Product = ({ id, image, name }: TProps): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.productItem}>
            <img
                className={classes.productImage}
                src={image}
                alt="productImage"
            />
            <div className={classes.propertyWrapper}>
                <div className={classes.nameWrapper}>
                    <p className={classes.productName}>{name}</p>
                </div>
                <ProductCartButton productId={id} />
            </div>
        </div>
    );
};

export default Product;
