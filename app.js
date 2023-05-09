const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/create-product', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/create-product.html'));
});

const port =process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server on-line on port ${port}`);
});