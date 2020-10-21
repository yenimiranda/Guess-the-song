// var a = 10;
// var b = 20;
// var result = a * b;
// console.log(`El valor resultado de multiplicar ${a} por ${b} es ${result}`);
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('<h1>Bienvenidos a la diversión, esté es un juego en el cuál van a poner aprueba sus sentidos.</h1>');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})