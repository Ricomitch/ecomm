import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'
import useStyles from './styles'

const products = [
  {
    id: 1,
    name: 'Nike Blazer Mid 77 Vintage',
    description: 'Mens shoes.',
    price: '100',
    image:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a11caa5a-95ee-46ce-9a28-c1b9b983e1d5/blazer-mid-77-vintage-mens-shoe-flCCX4.jpg',
  },
  {
    id: 2,
    name: 'Nike Air Force 1 07 SE',
    description: 'Womens Shoes.',
    price: '100',
    image:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8c6a804c-3884-4c41-8d88-351e8ef61de8/air-force-1-07-se-womens-shoe-4Mq76P.jpg',
  },
]

const Products = () => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
