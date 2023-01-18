const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3000;

//cors
// const corsOptions = {
//     origin : process.env.ALLOWED_CLIENTS.split(',')
// }

// app.use(cors({
//     origin: '*'
// }));
// app.use(cors(corsOptions));

app.use(cors());

app.use(express.static('public'));   
app.use(express.json());
const connectDB = require('./config/db');
connectDB();


// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse the raw data
app.use(bodyParser.raw());
// parse text
app.use(bodyParser.text());

// template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//routes
app.use('/api/files',require('./routes/models'));
app.use('/files',require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})