const express = require("express");
const multer = require("multer");
const path = require("path");
const CommunityPartner = require("../models/CPModel");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage: storage });

router.post("/register-cp", upload.single("image"), async (req, res) => {
  const {
    companyName,
    size,
    deliveries,
    linkedIn,
    instagram,
    contactName,
    phoneNumber,
    imageUrl,
  } = req.body;
  const imagePath = req.file ? req.file.path : null; 

  try {
    const sponserData = req.body;
    console.log(sponserData.imageUrl);

    const newCP = new CommunityPartner({
      companyName,
      size,
      deliveries,
      linkedIn,
      instagram,
      contactName,
      phoneNumber,
      imageUrl,
    });

    await newCP.save();
    res
      .status(201)
      .json({
        message: "Community Partner registered successfully",
        cp: newCP,
      });
  } catch (error) {
    console.error("Error registering Community Partner:", error);
    res
      .status(500)
      .json({ message: "Error registering Partner", error: error.message });
  }
});

router.get("/CP", async (req, res) => {
  try {
    const CPs = await CommunityPartner.find(); 
    res.status(200).json(CPs); 
  } catch (error) {
    console.error("Error fetching community partners:", error);
    res
      .status(500)
      .json({ message: "Error fetching community partners", error: error.message });
  }
});

module.exports = router;
