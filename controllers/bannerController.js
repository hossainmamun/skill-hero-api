const bannerSchema = require('../models/bannerModel')

// create banner
const createBanner = async(req, res) => {
    const {bannerTitle, bannerSubTitle, bannerImage} = req.body;

    try {
        const banner = await bannerSchema.create({bannerTitle, bannerSubTitle, bannerImage});
        res.status(201).json(banner)
    } catch (error) {
        res.status(401).json({error: error.message})
    }
}

// get banner
const bannerList = async(req, res) => {
    try {
        const banner = await bannerSchema.find({})
        res.status(200).json(banner)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// get single banner
const singleBanner = async(req, res) => {
    const id = req.params.id;
    try {
        const banner = await bannerSchema.findById({_id: id});
        res.status(200).json(banner)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// update banner
const updateBanner = async(req, res) => {
    const id = req.params.id;
    const {bannerTitle, bannerSubTitle, bannerImage} = req.body;
    try {
        const banner = await bannerSchema.findByIdAndUpdate({_id: id}, {
            bannerTitle, bannerSubTitle, bannerImage
        }, {returnOriginal: false});
        res.status(200).json(banner)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete banner
const deleteBanner = async(req, res) => {
    const id = req.params.id;
    try {
        const banner = await bannerSchema.findByIdAndDelete({_id: id});
        res.status(200).json(banner)
    } catch (error) {
        res.status(400).json({error: error.message})  
    }
}

module.exports = {
    createBanner,
    bannerList,
    singleBanner,
    updateBanner,
    deleteBanner
}