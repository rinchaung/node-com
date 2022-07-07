const express = require('express');
const router  = express.Router();
const path    = require('path');
const rootDir = require('../util/path.js');
const products = [];

router.get('/add-product', (req, res, next) =>{
     res.render('add-product', { 
        adminTitle : 'Add Product',
        path : "/admin/add-product",
        productCSS: true,
        mainCSS : true,
        formsCSS : true,
        activeProduct: true
    });
});

router.post('/add-product', (req, res, next) =>{
    //console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;