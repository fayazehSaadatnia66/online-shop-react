import { Button, Card, Grid, List, ListItem, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { Store, } from '../utils/Store';


export default function Cart() {
  const { state , dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  
  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };


  return (
    <Layout title="Shopping Cart">
    <Typography component="h1" variant="h1">
       سبد خرید
    </Typography>
    {cartItems.length === 0 ? (
      <div>
        سبد خرید خالی است 
      </div>
    ) : (
      <Grid container spacing={1}>
        <Grid item md={9} xs={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>تصویر</TableCell>
                  <TableCell>نام</TableCell>
                  <TableCell align="right">تعداد</TableCell>
                  <TableCell align="right">قیمت</TableCell>
                  <TableCell align="right">عملیات</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Link to={`/product/${item.slug}`} >
                          <img
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                          />
                      </Link>
                    </TableCell>

                    <TableCell>
                      <Link to={`/product/${item.slug}`} >
                          <Typography>{item.name}</Typography>
                      </Link>
                    </TableCell>
                    <TableCell align="right">
                    <Typography>{item.quantity}</Typography>
                    </TableCell>
                    <TableCell align="right">{item.price}تومان</TableCell>
                    <TableCell align="right">
                        <Button
                      
                          onClick={() => removeItemHandler(item)}
                        >
                          حذف
                        </Button>
                      </TableCell>
                   
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Typography variant="h2">
                  جمع کل ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                  تعداد) : 
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                  تومان
                </Typography>
              </ListItem>
              <ListItem>
                <Button variant="contained" color="primary" fullWidth>
                  پرداخت
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    )}
  </Layout>
  )
}
