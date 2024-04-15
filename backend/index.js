
const express = require('express');
const app = express();

app.use(express.json());

require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, function(req, resp) {
    console.log(`The app is listened at PORT : ${PORT}`);
})

app.get('/', function(req, resp){
    console.log("We are at HomePage of Urban Rasoi");
    resp.send(`<h1> At HomePage of Urban Rasoi </h1> `);
});

// const dbConnect = require('./config/database');
// dbConnect();

const dbConnect = require('./config/database2');
dbConnect();

//always use before mouting routes
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

//mounting the routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/v1', userRoutes);
const foodRoutes = require('./routes/foodRoutes');
app.use('/api/v1', foodRoutes);

const cookieParser = require('cookie-parser');
app.use(cookieParser());

