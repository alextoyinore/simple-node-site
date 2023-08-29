const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogControllers')

// blog routes
// retrieve all blogs
router.get('/', blogController.blogIndex)


    // Create blog
router.post('/', blogController.blogCreate)

    // single blog
router.get('/:id', blogController.blogDetail)

    // delete blog
router.delete('/:id', blogController.blogDelete)

module.exports = router
