const express = require("express");
const multer = require("multer");
const Sponsor = require("../models/SponsorModel");
const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to store the uploaded images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append current timestamp to filename
  },
});

const upload = multer({ storage: storage });

router.post("/register-sponsor", upload.single("image"), async (req, res) => {
  const {
    companyName,
    amount,
    deliveries,
    linkedIn,
    instagram,
    contactName,
    phoneNumber,
    imageUrl,
  } = req.body;
  const imagePath = req.file ? req.file.path : null; // Get the image path

  try {
    const sponserData = req.body;
    console.log(sponserData.imageUrl);

    const newSponsor = new Sponsor({
      companyName,
      amount,
      deliveries,
      linkedIn,
      instagram,
      contactName,
      phoneNumber,
      imageUrl,
    });

    await newSponsor.save();
    res
      .status(201)
      .json({
        message: "Sponsor registered successfully",
        sponsor: newSponsor,
      });
  } catch (error) {
    console.error("Error registering sponsor:", error);
    res
      .status(500)
      .json({ message: "Error registering sponsor", error: error.message });
  }
});

router.get("/sponsors", async (req, res) => {
  try {
    const sponsors = await Sponsor.find(); // Fetch all sponsors from the database
    res.status(200).json(sponsors); // Send the data as a JSON response
  } catch (error) {
    console.error("Error fetching sponsors:", error);
    res
      .status(500)
      .json({ message: "Error fetching sponsors", error: error.message });
  }
});

module.exports = router;
