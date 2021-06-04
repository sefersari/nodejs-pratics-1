require('custom-env').env('app');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes/router');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use('/customers', router);

app.get('/', (req, res) => {
    res.json({'message': 'ok'})
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
