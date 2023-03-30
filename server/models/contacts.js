const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            min: 3,
            max: 50
        },
        email: {
            type: String,
            require: true,
            max: 20,
            unique: true
        },
        phoneNumber: {
            type: String,
            require: true,
            min: 6,
            max: 12,
            unique: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("contacts", ContactSchema)