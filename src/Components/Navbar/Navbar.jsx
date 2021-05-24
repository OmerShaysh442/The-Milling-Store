import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';


import logo from '../../Assets/logo-mill.png'
import useStyles from './styles';
//import classes from '*.module.css';//

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
    return (
        <>
          <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
             <Typography variant="h4" className={classes.title} color="inherit">
               <img src={logo} alt="The Milling Store" height="105px" className={classes.image} /> The Milling Store
             </Typography>
             <div className= {classes.grow} />
             <div className= {classes.button}>
               <IconButton aria-label= "Show cart items" color="inherit">
                 <Badge badgeContent={totalItems} color="secondary">
                   <ShoppingCart />
                 </Badge>
               </IconButton>             

             </div>
            </Toolbar>
          </AppBar>
            
        </>
    )
}

export default Navbar
