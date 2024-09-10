const mongoose = require('mongoose');

const cpSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    size: { type: Number, required: true },
    deliveries: { type: String, required: true },
    linkedIn: { type: String },
    instagram: { type: String },
    contactName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

const CommunityPartner = mongoose.model('CommunityPartner', cpSchema);

module.exports = CommunityPartner;
