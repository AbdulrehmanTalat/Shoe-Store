import React, { useContext } from 'react';
import GlobalContext from '../../../state/GlobalContext';
import { useParams } from 'react-router-dom';
import style from '../Product.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { CartContext } from '../../../state/CartContext'
const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    width: 600,
  },
  media: {
    height: 340,
  },
  grid: {
    paddingTop:20,
  },
  btn:{
    backgroundColor:"black",
    color:"white",
    width:"100%",
  }
});
export const Products = () => {
  const classes = useStyles();
  const { products } = useContext(GlobalContext);
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  console.log(product);
  const { addToCart } = useContext(CartContext); 
    
    function handleAddToCart(e) {
        e.stopPropagation();
        addToCart( product );
    }
  return (
    <div>
        <div className={style.main_div}>
                <div className={style.product_txt}>
                {product.name}&nbsp; Detail
                </div>
            </div>
            <Grid
             container
             direction="row"
             justify="center"
             alignItems="center"
            className={classes.grid}
            >

            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.imageURL}
          title="shoe"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Price: {product.price} $
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Name: {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Pieces Left: {product.items_left}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={ handleAddToCart } className={classes.btn}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </div>
  )
}
export default Products;
