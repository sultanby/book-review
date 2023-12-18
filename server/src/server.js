const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./routes/api');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/', apiRouter);
app.use('/register', apiRouter);
app.use('/login', apiRouter);

mongoose
  .connect(process.env.REACT_APP_DATABASE_URL)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


app.get('/', (req, res) => {
    res.json({message: 'here'});
});


const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
