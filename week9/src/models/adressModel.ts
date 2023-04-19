import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    residents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }]
})

const Address = mongoose.model('Address', addressSchema)
export default Address