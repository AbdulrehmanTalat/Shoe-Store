import React, { useContext } from 'react'
import style from '../Product/Product.module.css';
import {CartContext} from '../../state/CartContext';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid, Container, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 10,
  },
  heading: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginTop: theme.spacing(4),
  },

  total: {
    marginBottom: theme.spacing(4),
  },
  root1: {
    border: `1px solid ${theme.palette.grey[400]}`,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  heading1: {
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },

  checkoutBtn: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  img:{
    height: 130,
    width: 165,
  },
  imgdiv:{
   float:"left"
  },
  txtdiv:{
    paddingLeft:10,
  },
  maindiv:{
  alignContent:"center",
  alignSelf:"center"
  }
}));
export const Cart = () => {
    const classes = useStyles();
    const { cart } = useContext(CartContext);
    const prices = cart.map( (p) => p.price * p.items )

    let totalPrice = 0;
    if (prices.length) {
        totalPrice = prices.reduce( (a, b) => a + b);
    }
    console.log(prices);
    console.log(cart)
    const items = cart.map((p) => p.items);
    let numOfItems = 0;
    if (items.length) numOfItems = items.reduce((a, b) => a + b);
    return (
        <div>
            <div className={style.main_div}>
                <div className={style.product_txt}>
                    My Cart
                </div>
            </div>
            <Container className={classes.root}>
            <Typography variant="h4" component="h4" className={classes.heading}>
                Your cart
            </Typography>
            <Typography variant="button" component="p" className={classes.total}>
                Total: <strong>${totalPrice}</strong>
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                {cart.length > 0 ? (
        cart.map((product) => (
                    <div>
                      <dic ><img src={product.imageURL} alt={product.name} className={classes.img}/></dic>
                      <div  ><p>Name: {product.name}</p>
                      <p>Price:  {product.price} $</p>
                      </div>

                    </div>
                        ))
                        ) : (
                          <div style={{ width: "100%" }}>
                            <Typography color="error" variant="body1">
                              Cart is empty
                            </Typography>
                          </div>
                        )}
                </Grid>
                <Grid item xs={12} md={4}>
                <Grid container className={classes.root1}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.heading1}>
            Order Summary
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Typography variant="button">{numOfItems} items</Typography>
          <Typography variant="button">${totalPrice}</Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Typography variant="button">Delivery</Typography>
          <Typography variant="button">Free</Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Typography variant="button">Sales Tax</Typography>
          <Typography variant="button">-</Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <Typography variant="button">Total</Typography>
          <Typography variant="button">${totalPrice}</Typography>
        </Grid>
      </Grid>
      <Button
        className={classes.checkoutBtn}
        variant="contained"
        color="secondary"
        fullWidth
      >
        Checkout
      </Button>
                </Grid>
            </Grid>
        </Container>
        </div>
    )
}
