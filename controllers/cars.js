////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Car = require("../models/car");


/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

////////////////////////////////
// Index
////////////////////////
router.get("/", (req, res) => {
    Car.find({})

        .then((cars) => {
            res.render("cars/Index", { cars });
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

//new
router.get('/new', (req, res) => {
    res.render('cars/New')
})
//Delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Car.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/cars')
        })
        .catch((error) => {
            res.status(400), json({ error })
        })
})
//Update
router.put('/:id', (req, res) => {
    const { id } = req.params;
    Car.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => {
            res.redirect(`/cars/${id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

//create
router.post('/', (req, res) => {
    console.log('beginning', req.body)
    console.log('after', req.body)
    Car.create(req.body)
        .then((createdCar) => {
            res.redirect(`/cars/${createdCar._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})
//Edit
router.get('/:id/edit', (req, res) => {
    const { id } = req.params
    Car.findById(id)
        .then((car) => {
            res.render('cars/Edit', { car })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})
//Search by make
// router.get("/searchBy/make/:make", (req, res) => {
//     Car.find({ make: req.params.make })

//         .then((cars) => {
//             res.render("cars/Index", { cars });
//         })
//         .catch((error) => {
//             res.status(400).json({ error })
//         })
// })

router.get("/searchBy/:filter/:value", (req, res) => {
    const { filter, value } = req.params
    // const filter = req.params.filter
    // const value = req.params.value
    Car.find({ [filter]: value })

        .then((cars) => {
            res.render("cars/Index", { cars });
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

//router post

router.post("/searchBy", (req, res) => {
    // console.log(req.body)
    const key = req.body.searchoptions
    // console.log(key)
    Car.findOne({ key: req.body.filter })
        .then((cars) => {
            // res.render("cars/Index", { cars });
            // res.send(cars)
            res.redirect(`searchBy/${key}/${req.body.filter}`)
        })
        .catch((error) => {
            res.status(400).json(error)
        })
    // res.send(req.body)
})

// Show

router.get('/:id', (req, res) => {
    const { id } = req.params

    Car.findById(id)
        .then((car) => {
            res.render('cars/Show', { car })

        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})
//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;