const express = require('express');
const axios = require('axios');
const app = express();
const {getTopProducts, getProductDetails} = require('./Controllers/Controllers.js');

app.use(express.json());

app.get('/companies/:company/categories/:category/products/top-n', async (req, res) => {
    const { company, category } = req.params;
    const { minPrice, maxPrice } = req.query;

    try {
        const products = await getTopProducts(company, category, minPrice, maxPrice);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/companies/:company/categories/:category/products/:productId', async (req, res) => {
    const { company, category, productId } = req.params;

    try {
        const productDetails = await getProductDetails(company, category, productId);
        res.json(productDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = app;
