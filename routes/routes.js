const express = require('express');
const UserModel = require('../model/UserModel');
const userModel = require('../model/UserModel')

const router = express.Router()


//Get all the users
router.get('/', async(req, res) => {
        try {
            const users = await UserModel.find()
            res.json(users)
        } catch (err) {
            console.log({ message: err })
        }
    })
    //Created the users

router.get('/', (req, res) => {
    const user = new UserModel({
        title: req.body.title,
        description: req.body.description
    })
    user.save().then(data => res.send(data)).catch(err => console.error(err, 'failed to save to the database'))
})

//Get individual user
router.get('/:userId', async(req, res) => {
    try {
        const user = await UserModel.findById(req.params.userId)
        res.json(user)

    } catch (err) {
        res.json({ message: err })
    }
})

//Update the User
router.patch('/:userId', async(req, res) => {
    try {
        const UpdateUser = await UserModel.updateOne({ _id: req.params, userId }, { $set: { title: req.body.title, description: req.body.description } })
        res.json(updateUser)
    } catch (err) {
        res.json({ message: err })
    }
})

//Delete the user
router.delete('/:userId', async(req, res) => {
    try {
        const deleteUser = await UserModel.remove({ _id: req.params.UserId })
        res.json(deleteUser)
    } catch (err) {
        res.json({ message: err })
    }
})
module.exports = router