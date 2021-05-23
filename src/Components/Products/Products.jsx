import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id:1, name: 'Wheat', description: 'Manitova', price: '$5', image: 'https://www.wellsafe.in/wp-content/uploads/2020/10/Wheat.jpg'},
    { id:2, name: 'Spelt', description: 'Spring', price: '$10', image: 'https://www.vacqpack.com/wp-content/uploads/sites/3/2019/11/wheat-1-768x350.jpg'},
]

const Products = () => {
    const classes = useStyles();
    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid> 
            ))}
        </Grid>
    </main>
    );
    
    
}

export default Products;
