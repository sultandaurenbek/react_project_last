import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import React from "react";
import HeaderMenuList from "./header-menu/HeaderMenuList";
import logo from "../../assets/images/logo.svg";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            backgroundColor: "#FFFFFF",
            height: 80,
            maxWidth: "100vw",
            filter: "drop-shadow(4px 0px 2px rgba(0, 0, 0, 0.25))",
        },
        signature: {
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 36,
            lineHeight: "42px",
            color: "#ED1C24",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
            textDecoration: "none",
            marginLeft: "1em",
        },
        logoArea: {
            gridColumnStart: "1",
            gridColumnEnd: "5",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "1em",
        },
        navigationArea: {
            [theme.breakpoints.only("lg")]: {
                gridColumn: "9 / 13",
                marginLeft: "6.2em",
            },
            [theme.breakpoints.up("xl")]: {
                gridColumn: "10 / 13",
                marginLeft: "4.5em",
            },
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
        },
    })
);

const Header = (): JSX.Element => {
    const classes = useStyles();

    return (
        <header className={classes.root}>
            <div className={classes.logoArea}>
                <NavLink to="/">
                    <img width="50px" src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png" alt="logo" />
                </NavLink>
                <NavLink className={classes.signature} to="/">
                    <p>SNS</p>
                </NavLink>
            </div>
            <div className={classes.navigationArea}>
                <HeaderMenuList />
            </div>
        </header>
    );
};

export default Header;
