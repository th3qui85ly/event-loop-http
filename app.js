const express = require("express");

const books = express();
const PORT = 1912;

books.get('/', (req, res) => {
    res.send('Hello');
});


const bookjson = [
    {
      "id": 1,
      "author": "Chinua Achebe",
      "title": "Things Fall Apart",
    },
    {
      "id": 2,
      "author": "Hans Christian Andersen",
      "title": "Fairy tales",
    },
    {
      "id": 3,
      "author": "Dante Alighieri",
      "title": "The Divine Comedy",
    },
    {
      "id": 4,
      "author": "Unknown",
      "title": "The Epic Of Gilgamesh",
    }
];

books.get('/books', (req, res) => {
    res.json(bookjson);
});

books.listen(PORT, () => console.log(`Books app listening on port ${PORT}!`));