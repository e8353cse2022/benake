const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../client')); // Serve static files from client

let users = [];

app.post('/api/users', (req, res) => {
    const { name, role } = req.body;
    const newUser = { name, role };
    users.push(newUser);
    res.json(newUser);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
