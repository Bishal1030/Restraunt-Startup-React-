const express = require('express');
const cors = require('cors');
const app = express();
const emailRoute = require('./routes/route');


// Enable CORS for all routes
app.use(cors());

// Body parser middleware
app.use(express.json());

// Your routes here
app.use('/form/email', emailRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
