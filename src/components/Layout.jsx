import {
  AppBar,
  Badge,
  Container,
  IconButton,
  InputBase,
  Switch,
  TextField,
  Toolbar,
  Typography
} from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import Cookies from "js-cookie"
import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Store, useStore } from "../utils/Store"
import useStyles from "../utils/styles"

export default function Layout({ children }) {
  const { state, dispatch } = useContext(Store)
  const { darkMode, cart } = state
  const classes = useStyles()
  const theme = createTheme({
    typography: {
      fontFamily: "irSans",

      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0"
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0"
      },
      body: {
        fontWeight: "normal"
      }
    },

    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000 !important"
      },
      secondary: {
        main: "#208080 important"
      }
    }
  })

  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" })
    const newDarkMode = !darkMode
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF")
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar position="static" className={classes.navBar}>
          <Toolbar>
            <Link to={"/"}>
              <Typography className={classes.brand}>فروشگاه</Typography>
            </Link>
            <div className={classes.grow}></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHandler}
              ></Switch>
              <Link to={"/product/cart"}>
                {cart.cartItems.length > 0 ? (
                  <Badge color="secondary" badgeContent={cart.cartItems.length}>
                    سبد خرید
                  </Badge>
                ) : (
                  "سبد خرید"
                )}
              </Link>{" "}
            </div>{" "}
          </Toolbar>
        </AppBar>
        <AppBar
          position="static"
          className={classes.navBar}
          style={{ marginTop: "10px" }}
        >
          <Toolbar style={{ backgroundColor: "yellowgreen" }}>
            <Link to={"/"}>
              <Typography className={classes.brand}>دسته بندی ها:</Typography>
            </Link>
            <Link to={"/"}>
              <Typography
                className={classes.brand}
                style={{ marginRight: "10px" }}
              >
                شلوار
              </Typography>
            </Link>
            <Link to={"/"}>
              <Typography
                className={classes.brand}
                style={{ marginRight: "10px" }}
              >
                پیراهن
              </Typography>
            </Link>
            <div className={classes.grow}></div>
            <form className={classes.searchForm}>
              <InputBase
                name="query"
                className={classes.searchInput}
                placeholder="جست و جو"
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              ></IconButton>
            </form>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>
            تمام حقوق مادی و معنوی این سایت متعلق به فروشگاه می باشد..
          </Typography>{" "}
        </footer>
      </ThemeProvider>
    </div>
  )
}
