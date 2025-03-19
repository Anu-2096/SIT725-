const express = require('express');
const app = express();

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        res.json({ result: sum });
    } else {
        res.status(400).json({ error: 'Invalid numbers' });
    }
});
app.post('/add', express.json(), (req, res) => {
    const { num1, num2 } = req.body;

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        res.json({ result: sum });
    } else {
        res.status(400).json({ error: 'Invalid numbers' });
    }
});

// Middleware to parse incoming JSON requests
app.use(express.json());

// Initialize the stored number
let storedNumber = 0;

// PUT endpoint
app.put('/update', (req, res) => {
    const { num1 } = req.body; // sending num1 as JSON
    if (num1) {
        res.json({
            message: 'Number updated successfully',
            num1Updated: num1
        });
    } else {
        res.status(400).json({ error: 'num1 is required' });
    }
});

// DELETE endpoint to reset the stored number
app.delete('/reset', (req, res) => {
    storedNumber = 0; // Reset storedNumber to 0
    res.json({
        message: 'Stored number reset to 0',
        storedNumber: storedNumber  // Send back the updated storedNumber (which is 0)
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});