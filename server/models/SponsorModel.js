const mongoose = require('mongoose');

const sponsorSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    amount: { type: Number, required: true },
    deliveries: { type: String, required: true },
    linkedIn: { type: String },
    instagram: { type: String },
    contactName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    imageUrl: { type: String, required: true }
});

const Sponsor = mongoose.model('Sponsor', sponsorSchema);

module.exports = Sponsor;
