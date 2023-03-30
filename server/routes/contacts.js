const router = require('express').Router()

const contacts = require('../models/contacts')


// GET ALL CONTACT
router.get('/', async (req, res) => {

    try {
        const userdata = await contacts.find()
        res.status(201).json(userdata)
        console.log(userdata)
    }
    catch (error) {
        console.log(error)
        res.status(404).json(error)
    }

})


// GET A SINGLE CONTACT BY ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const userdata = await contacts.findById({ _id: id })
        res.status(201).json(userdata)
        console.log(userdata)
    }
    catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
})

// ADD A CONTACT
router.post('/add', async (req, res) => {

    const { name, email, phoneNumber } = req.body

    if (!name || !email || !phoneNumber) {
        res.status(404).send('Plase fill the data!')
    }


    try {
        const existingContact = await contacts.findOne({ email: email })
        if (existingContact) {
            res.status(404).send('Contact already exists!!!')
        }
        else {
            const addContact = new contacts({ name, email, phoneNumber })
            await addContact.save()
            res.status(201).json(addContact)
        }
    }
    catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
})

// UPDATE A CONTACT ID
router.put('/:id/update', async (req, res) => {
    try {

    }

    catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
})

// DELETE A CONTACT ID

router.delete('/:id/delete', async (req, res) => {
    try {

    }

    catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
})
