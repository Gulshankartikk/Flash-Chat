const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})