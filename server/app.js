const express = require('express');
const app = express();
const pool = require('./db/pool')
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/addCountry', (req, res) => {
    const { userid, country } = req.body;
    try {
        pool.query(`
            INSERT INTO saves (userid, country)
            VALUES ($1, $2)
        `, [userid, country]);

        res.json({ succes: true, message: 'succesfully saved country' });
    } catch (err) {
        console.error(err);
        res.json({ succes: false, message: 'failed to save country' });
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});