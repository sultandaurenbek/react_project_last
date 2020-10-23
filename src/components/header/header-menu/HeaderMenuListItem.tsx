import React from "react";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    link: {
        display: "flex",
        alignContent: "center",
        textDecoration: "none",
        color: "#6F6F6F",
        "&.active": {
            color: "white",
        },
    },
    linkListItem: {
        display: "flex",
        alignItems: "center",
        fontFamily: "Roboto",
        fontSize: 18,
        lineHeight: "26.95px",
        padding: "0.5em",
    },
});

type TProps = {
    pageName: string;
    pageUrl: string;
};

const HeaderMenuListItem = ({ pageName, pageUrl }: TProps): JSX.Element => {
    const classes = useStyles();
    const listElementId = pageName + pageUrl;

    return (
        <NavLink
            className={classes.link}
            exact={true}
            to={pageUrl}
            activeStyle={{
                backgroundColor: "#ED1C24",
                fontWeight: "bold",
                color: "white",
            }}
        >
            <li id={listElementId} className={classes.linkListItem}>
                <p>{pageName}</p>
            </li>
        </NavLink>
    );
};

export default HeaderMenuListItem;
