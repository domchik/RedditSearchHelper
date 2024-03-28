const express = require('express');

const searchRoute = require('./routes/searchRoute');

const app = express();

app.use(searchRoute);
const port = process.env.PORT || 5001;


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
