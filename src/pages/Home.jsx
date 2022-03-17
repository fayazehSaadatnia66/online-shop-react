import React, { useContext } from "react"
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography
} from "@mui/material"
import { useEffect } from "react"
import Layout from "../components/Layout"
import data from "../utils/data"
import { Link } from "react-router-dom"
import { Store } from "../utils/Store"

export default function Home() {
  const { dispatch } = useContext(Store);
  const addToCartHandler = (product) => {
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity: 1 } })
  }

  useEffect(() => {
    document.title = "صفحه اصلی"
  }, [])

  return (
    <Layout>
      <h1>Products</h1>
      <Grid container spacing={3}>
        {data.products.map((product) => (
          <Grid item md={4} key={product.id}>
            <Card>
              <Link to={`/product/${product.slug}`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.title}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                    <Rating value={product.rating} readOnly></Rating>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions>
                <Typography>{product.price} تومان</Typography>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => addToCartHandler(product)}
                >
                  اضافه ب سبد خرید
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}
