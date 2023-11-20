const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

// MONGODB SETUP
mongoose
  .connect(process.env.MONGODB_URI)
  .then(
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(`Server didn't connect ! Err:${err}`);
  });
