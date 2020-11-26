const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const routes = require('./routes');
const router = routes(express.Router());
app.use(router);

app.listen(3000, () => console.log(`Listening on port 3000....`));