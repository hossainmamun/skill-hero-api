const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    courseImage: {
        type: String,
        require: true
    },
    courseTitle: {
        type: String,
        require: true
    },
    coursePrice: {
        type: String,
        require: true
    },
}, {timestamps: true})

module.exports = mongoose.model("course", courseSchema)