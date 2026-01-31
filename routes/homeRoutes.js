const express = require("express");
const Errors = require("../schmas/errorsschma");
const router = express.Router();

// Protected home route
router.get('/api/home', async(req,res)=>{
  try {
    const errors = await Errors.find().populate('createdby', 'username email').sort({ createdAt: -1 });
    res.status(200).json(errors);
    
  } catch (error) {
    res.status(500).json({ message: error.message || 'Server Error' });
  }
})

module.exports = router;
