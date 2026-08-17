const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/submit', (req, res) => {
    const { name, address, phone } = req.body;

    if (!name || !address || !phone) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    console.log('eKatha Data Received:', req.body);
    res.json({ message: 'eKatha form submitted successfully!' });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
