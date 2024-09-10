const express = require("express");
const Designer = require("../models/DesignerModel");
const path = require("path");
const router = express.Router();

router.post("/register-designer", async (req, res) => {
    const { name, email, experience, skills, charge, ProjectLink } = req.body;
    
    try {
        const newDesigner = new Designer({
        name,
        email,
        experience,
        skills,
        charge,
        ProjectLink,
        });
    
        await newDesigner.save();
        res
        .status(201)
        .json({
            message: "Designer registered successfully",
            designer: newDesigner,
        });
    } catch (error) {
        console.error("Error registering designer:", error);
        res
        .status(500)
        .json({ message: "Error registering designer", error: error.message });
    }
});

router.get("/designer", async (req, res) => {
    try {
        const designers = await Designer.find();
        res.status(200).json(designers);
    } catch (error) {
        console.error("Error fetching designers:", error);
        res.status(500).json({ message: "Error fetching designers", error: error.message });
    }
});
module.exports = router;