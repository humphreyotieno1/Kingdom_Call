const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const emailRoutes = require('./routes/emailRoutes');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/', async(req, res) =>{
    res.json({message: 'Kingdom Call API'});
});

app.use('/contact', emailRoutes);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});