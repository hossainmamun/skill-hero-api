const mongoose = require('mongoose')
const { string } = require('yup')

const bannerSchema = new mongoose.Schema({
    bannerTitle: {
        type: String,
        require: true
    },
    bannerSubTitle: {
        type: String,
        require: true
    },
    bannerImage: {
        type: String,
        require: true
    },
}, {timestamps: true})

module.exports = mongoose.model("banner", bannerSchema)