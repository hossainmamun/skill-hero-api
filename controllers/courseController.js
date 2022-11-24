const courseSchema = require('../models/courseModel');

// create course
const createCourse = async(req, res) => {
    const {courseImage,courseTitle,coursePrice} = req.body
    try {
        const course = await courseSchema.create({courseImage,courseTitle,coursePrice})
        res.status(201).json(course)
    } catch (error) {
        res.status(401).json({error: error.message})
    }
}

// get course
const getCourseList = async(req, res) => {
    try {
        const course = await courseSchema.find({});
        res.status(200).json(course)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get single course
const singleCourse = async(req, res) => {
    const id = req.params.id;
    try {
        const course = await courseSchema.findById({_id: id})
        res.status(200).json(course)
    } catch (error) {
        res.status(400).json({error: error.message})
    } 
}

// update course
const updateCourse = async(req, res) => {
    const id = req.params.id;
    const {courseImage,courseTitle,coursePrice} = req.body;

    try {
        const course = await courseSchema.findByIdAndUpdate({_id: id}, {
            courseImage,courseTitle,coursePrice
        }, {returnOriginal: false});
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete course
const deleteCourse = async(req, res) => {
    const id = req.params.id;
    
    try {
        const course = await courseSchema.findByIdAndDelete({_id: id});
        res.status(200).json(course)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createCourse,
    getCourseList,
    singleCourse,
    updateCourse,
    deleteCourse
}