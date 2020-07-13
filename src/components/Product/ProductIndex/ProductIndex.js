import React, {useContext} from 'react'
import GlobalContext from '../../../state/GlobalContext';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
export const ProductIndex = () => {

  const {products} = useContext(GlobalContext);

  const classes = useStyles();
  return (
    <Grid container >
      {products.length > 0 ? (
        products.map((product) => (
        <Grid container item xs={12} md={3} lg={3} spacing={2}>
          <Card className={classes.root}>
            <Link to={`/product/${product.slug}`}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="260"
                  image={product.imageURL}
                  title={product.name}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {product.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
     ))
     ) : (
      <div style={{ width: "100%" }}>
        <Typography
          color="error"
          variant="body1"
          style={{ textAlign: "center", padding: "1rem" }}
        >
          No product available
        </Typography>
      </div>
    )}

    </Grid>
  )
}
export default ProductIndex;
