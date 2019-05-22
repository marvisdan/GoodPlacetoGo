const express = require('express');
const cors = require('cors');

require('./db/mongoose');
const placeRouter = require('./router/place');

const app = express();
const port = process.env.PORT || 4001;

app.use(cors({
  origin: 'http://localhost:8000',
}));
app.use(express.json());
app.use(placeRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
})
