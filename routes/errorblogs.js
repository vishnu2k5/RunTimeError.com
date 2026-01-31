const express = require('express');
const router = express.Router();

// Error blogs data
router.get('/', async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;