require("dotenv").config();
const express = require('express');
const app = express();
const counter = require('./src/counter')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/counter', counter)
// Тут Number иначе не запускает и пишет что порт занят
const PORT = Number(process.env.PORT) || 3001;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
