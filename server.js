require('dotenv').config();
const express = require('express');
const path = require('path');

const default_routes = require('./routes/default_routes');

const PORT = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(default_routes);


app.listen(PORT, ()=>{
    console.info(`auto-test:server is running on ${PORT}`);
});