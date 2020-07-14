import React from "react";
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import ProductIndex from './components/Product/ProductIndex/ProductIndex';
import Products from './components/Product/Products/Products';
import NotFound from './components/NotFound/NotFound';
import { GlobalDataProvider } from "./state/GlobalDataProvider";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import img from '../src/images/shoe-shop.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartContextProvider from './state/CartContext';
import { Cart } from "./components/Cart/Cart";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
      color: "#fffff"
    },
    link: {
      color: "aliceblue",
    },
    shoeicon: {
      height: 46,
    },

  }),
);

function App() {
  const classes = useStyles();
  return (

    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img className={classes.shoeicon} src={img} alt="icon" />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link className={classes.link} to="/">Home</Link>{"  "}
              <Link className={classes.link} to="product">Product</Link>
            </Typography>
            <Link className={classes.link} to="cart">
              <ShoppingCartIcon />
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <GlobalDataProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<Product />} >
              <Route path="/" element={<ProductIndex />} />
              <Route path=":slug" element={<Products />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </CartContextProvider>
      </GlobalDataProvider>
    </Router>

  );
}

export default App;
