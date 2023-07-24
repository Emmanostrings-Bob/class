const express = require('express');
const router = express.Router();

// getting all
router.get('/', (req, res)=> {
    res.send('Hello World')
})
// creating one
router.get('/:id', (req, res)=> {

})
// updating one
router.patch('/:id', (req, res)=> {

})
// deleting one
router.delete('/:id', (req, res)=> {
    
})






module.exports = router


