const mongoose = require('mongoose');

const simSchema = new mongoose.Schema({
    simNumber: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    userName: { type: String, required: true },
    activationStatus: { type: Boolean, default: false },
});

const SIM = mongoose.model('SIM', simSchema);
module.exports = SIM;