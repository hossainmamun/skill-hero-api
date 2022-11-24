const express = require("express");
const {
  createBanner,
  bannerList,
  singleBanner,
  updateBanner,
  deleteBanner,
} = require("../controllers/bannerController");
const validation = require("../middlewares/validationMiddleware");
const { bannerValidation } = require("../validation/schemaValidation");
const bannerRouter = express.Router();

// post banner
bannerRouter.post("/", validation(bannerValidation), createBanner);

// get banner
bannerRouter.get("/", bannerList);

// get single banner
bannerRouter.get("/:id", singleBanner);

// update banner
bannerRouter.patch("/:id", updateBanner);

// delete banner
bannerRouter.delete("/:id", deleteBanner);

module.exports = bannerRouter;
