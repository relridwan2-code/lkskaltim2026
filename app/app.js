const express = require('express');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sambungkan rute auth ke aplikasi
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to KALTIM SMART PLATFORM API",
        data: { status: "Running" }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});