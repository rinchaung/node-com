const express = require('express');
const path    = require('path');
const router  = express.Router();
const adminData = require('./admin');

const rootDir = require('../util/path.js');

router.get('/', (req, res, next) =>{
    const products = adminData.products;
    res.render('shop', { 
        prods : products,
        shopTitle : 'Shop', 
        path: '/', hasProduct : products.length > 0,
        mainCSS : true,
        activeShop : true
    });
});

module.exports = router;