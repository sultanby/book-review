const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./routes/api');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/', apiRouter);

const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.json({message: 'here'});
});


const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
