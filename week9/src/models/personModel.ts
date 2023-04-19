import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
        required: true
    }
})

const Person = mongoose.model('Person', personSchema)
export default Person