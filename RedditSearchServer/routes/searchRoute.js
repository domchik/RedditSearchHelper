const express = require('express');
const cors = require('cors');
const dataUtils = require('../utils');

const router = express.Router();
const corsOptions = {
    origin: '*', // in real life, only our domain will be listed instead of *
    credentials: true,
    optionsSuccessStatus: 200
};

router.use(cors(corsOptions));

router.get('/api/search', async (req, res) => {
    const {q} = req.query;
    if (!q) {
        return res.status(400).json({message: 'Search term is required'});
    }
    try {
        const response = await dataUtils.fetchRedditData(q);
        res.json({response});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Error fetching results'});
    }
});

module.exports = router;
