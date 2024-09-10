const mongoose = require('mongoose');
const designerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    experience: { type: String, required: true },
    skills: { type: String, required: true },
    charge: { type: String, required: true },
    ProjectLink: { type: String, required: true }
});
const Designer = mongoose.model('Designer', designerSchema);
module.exports = Designer;