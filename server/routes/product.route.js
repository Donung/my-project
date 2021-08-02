const express = require('express');
const router = express.Router();

// Product model
const productSchema = require('../models/Product');

// Create Product
router.route('/create-product').post((req, res, next) => {
    productSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data);
        }
    })
})

// Read Product
router.route('/products').get((req, res, next) => {
    productSchema.find({}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Product category
router.route('/products/:id').get((req, res, next) => {
    productSchema.find({category: req.params.id}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Get single Product
router.route('/edit-product/:id').get((req, res, next) => {
    productSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data);
        }
    })
})

// Update Product
router.route('/update-product/:id').put((req, res, next) => {
    productSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            console.log(error)
            return next(error)
        } else {
            res.json(data)
            console.log('Product updata successfully')
        }
    })
})

// Delete Product
router.route('/delete-product/:id').delete((req, res, next) => {
    productSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = router;