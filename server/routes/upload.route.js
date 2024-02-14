const express = require("express");
const multer = require("multer");

const auth = require("../middlewares/auth.middleware");
const uploadController = require("../controllers/upload.controller");

const upload = multer({
  storage: multer.memoryStorage(),
});

const uploadRoute = express.Router();

uploadRoute.post(
  "/",
  upload.single("file"),
  auth(),
  uploadController.uploadFile
);

module.exports = uploadRoute;
