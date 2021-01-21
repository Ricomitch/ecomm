import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running shoes.',
    price: '5',
    image:
      'https://static01.nyt.com/images/2020/02/25/well/PHYSED-SHOES1/merlin_168154896_a69879b8-d43a-40d0-8297-dd7086d7d784-mobileMasterAt3x.jpg',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple macbook.',
    price: '10',
    image:
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=892&hei=820&&qlt=80&.v=1603406905000',
  },
]

const Products = () => {
  return (
    <main>
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
