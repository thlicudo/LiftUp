require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutsRoutes = require('./routes/workouts');
const cors = require('cors');

// Express App
const app = express();
const PORT = process.env.PORT

// Middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/workouts', workoutsRoutes);


// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Connected to DB & Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });


