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

const Navbar = () => {
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <ToolBar>
          <Typography></Typography>
        </ToolBar>
      </AppBar>
    </>
  )
}

export default Navbar
