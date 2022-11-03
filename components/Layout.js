import {
  AppBar,
  Link,
  Container,
  Toolbar,
  Typography,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Head from "next/head";
import React from "react";
import useStyles from "../utils/styles";
import NextLink from "next/link";

export default function Layout({ children, title, description }) {
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
    },
    palette: {
      type: "light",
      primary: {
        main: "#f0c040",
      },
      secondary: {
        main: "#208080",
      },
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title ? `${title}- Shopaholic` : "Shopaholic"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Shopaholic</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          All rights reserved. Shopaholic 2022
        </footer>
      </ThemeProvider>
    </div>
  );
}
