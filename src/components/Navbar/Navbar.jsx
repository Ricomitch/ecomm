import React from 'react'
import {
  AppBar,
  ToolBar,
  IconButton,
  Badge,
  Menu,
  Typography,
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/nike-logo.png'
import classes from '*.module.css'

const Navbar = () => {
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <ToolBar>
          <Typography variant='h6' className={classes.title} color='inherit'>
            <img
              src={logo}
              alt='Commerce.js'
              height='25px'
              className={classes.image}
            />
            Nike
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label='Show cart items' color='inherit'>
              <Badge badgeContent={2}></Badge>
            </IconButton>
          </div>
        </ToolBar>
      </AppBar>
    </>
  )
}

export default Navbar
