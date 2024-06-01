const dotenv  = require('dotenv');
dotenv.config();
// const express = require('express');
// const axios = require('axios');
// const app = express();
const port = process.env.PORT || 5000;
const app = require('./app.js');


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});