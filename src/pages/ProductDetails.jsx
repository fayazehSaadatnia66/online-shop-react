import {
  Button,
  Card,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography
} from "@mui/material"
import React, { useContext } from "react"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import Layout from "../components/Layout"
import data from "../utils/data"
import { Store, useStore } from "../utils/Store"
import useStyles from "../utils/styles"



export default function ProductDetails() {
  const classes = useStyles()
  const { slug } = useParams()
  let navigate = useNavigate();

  const { state , dispatch } = useContext(Store);
  const {
    cart,
    cart: { cartItems },
  } = state;

  console.log(cartItems)
  const product = data.products.find((product) => product.slug === slug)
  if (!product) {
    return <div> محصول وجود ندارد</div>
  }

  const addToCartHandler = (product) => { 
    const existItem = cart.cartItems.find((x) => x.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
     dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity }
     })

     navigate('/product/cart')

  }
  return (
    <Layout>
      <div className={classes.section}>
        <Link to={"/"}>
          <Typography>برگشت ب صفحه اصلی</Typography>
        </Link>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <CardMedia
            component="img"
            image={product.image}
            title={product.title}
          ></CardMedia>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1">{product.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography>دسته: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>برند: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                امتیاز: {product.rating} ستاره: ({product.numReviews} )
              </Typography>
            </ListItem>
            <ListItem>
              <Typography> توضیحات: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>قیمت</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{product.price} تومان</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>وضعیت</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? "موجود" : "عدم موجودی"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => addToCartHandler(product)}
                >
                  اضافه ب سبد خرید
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
