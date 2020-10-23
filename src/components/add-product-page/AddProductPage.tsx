import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../reducers/products/products-page-slice";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    headingWrapper: {
        gridColumnStart: "1",
        gridColumnEnd: "10",
        gridRowStart: "1",
        backgroundColor: "#ED1C24",
        padding: "1em",
        color: "#FFFFFF",
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: "28px",
        marginBottom: "1em",
    },
    formWrapper: {
        display: "grid",
        gridTemplateColumns: "repeat(9, 1fr)",
        padding: "5.5em",
        paddingTop: "2.5em",
        gridGap: "1em 1em",
        "& input": {
            boxSizing: "border-box",
            backgroundColor: "#F8F8F8",
            width: "100%",
            height: "2.5em",
            border: "1px solid #6F6F6F",
            borderRadius: 5,
            fontFamily: "Roboto",
            fontSize: 24,
            lineHeight: "28.13px",
            color: "C4C4C4",
            boxShadow: "0 0 15px 4px rgba(0,0,0,0.06)",
            paddingLeft: "2em",
        },
    },
    nameFieldWrapper: {
        gridColumnStart: "1",
        gridColumnEnd: "7",
    },
    typeFieldWrapper: {
        gridColumnStart: "1",
        gridColumnEnd: "7",
    },
    priceFieldWrapper: {
        gridColumnStart: "7",
        gridColumnEnd: "10",
    },
    imageField: {
        gridColumnStart: "1",
        gridColumnEnd: "10",
        gridRowStart: "3",
        width: "100%",
    },
    saveBtnWrapper: {
        gridColumnStart: "8",
        gridColumnEnd: "10",
        gridRowStart: "4",
        "& input": {
            backgroundColor: "#ED1C24",
            color: "#FFFFFF",
            borderRadius: 5,
            paddingLeft: "0",
            "&:hover": {
                cursor: "pointer",
            },
        },
    },
});

export type NewProductData = {
    name: string;
    imageUrl: string;
    price: number;
    type: string;
};

const AddProductPage = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();

    const { register, handleSubmit, reset } = useForm<NewProductData>();

    const dispatch = useDispatch();
    const onSubmit = (data: NewProductData) => {
        dispatch(addProduct(data));
        reset();
        history.push("/");
    };

    return (
        <form className={classes.formWrapper} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.headingWrapper}>
                <h1>New Product</h1>
            </div>
            <div className={classes.nameFieldWrapper}>
                <input
                    placeholder="Product name"
                    type="text"
                    id="name"
                    name="name"
                    ref={register}
                />
            </div>
            

            <div className={classes.priceFieldWrapper}>
                <input
                    placeholder="Price"
                    type="number"
                    step="0.0001"
                    id="price"
                    name="price"
                    ref={register}
                />
            </div>
            <div className={classes.typeFieldWrapper}>
                <input
                    placeholder="Product type"
                    type="text"
                    id="type"
                    name="type"
                    ref={register}
                />
            </div>
            <div className={classes.imageField}>
                <input
                    placeholder="Image Url"
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    ref={register}
                />
            </div>
            

            <div className={classes.saveBtnWrapper}>
                <input
                    type="submit"
                    value="Save"
                    name="submit"
                    ref={register}
                />
            </div>
        </form>
    );
};

export default AddProductPage;
