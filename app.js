/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [{name: 'Tony', email: 'tony@mail.com'}];

app.get('/', (_, res) => {
    res.send('Your Express App');
});

app.get('/user/:name', (req, res) => {
    const {name} = req.params;
    const user = users.filter((user) => user.name === name)[0];
    res.json({ ok: true, user });
});

app.get('/users', (_, res) => {
    res.json({ ok: true, users });
});

app.post('/adduser', (req, res) => {
    const {name, email } = req.body;
    if(name && email) {
        users.push({ name, email});
        res.json({ ok: true, users});
    }   
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});*/

require('dotenv').config();
// const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
// app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})