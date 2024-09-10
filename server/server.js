const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const sponsorRoutes = require('./routes/Sponsor');
const CPRoutes = require('./routes/CP');
const DesignerRoutes = require('./routes/Designer');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// mongodb+srv://chinnarinarashimha:Narashimha123@cluster0.dynoifc.mongodb.net/
//TeamHackers
mongoose.connect("mongodb+srv://chinnarinarashimha:TeamHackers@cluster0.dynoifc.mongodb.net/HackersData")
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error: ', err));


    app.use('/api', userRoutes);
    app.use('/v1/api', sponsorRoutes);
    app.use('/v1/api', CPRoutes);
    app.use('/v1/api', DesignerRoutes);
    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
    res.send('Welcome to the backend!');
});

app.listen(PORT, () => {
    console.log("Server is running");
});