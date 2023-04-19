import Person from "../models/personModel";
import Address from "../models/adressModel";

const resolvers = {
    Query: {
        person: async (_, { id }) => {
            return await Person.findById(id).populate('address');
        },
        people: async () => {
            return await Person.find().populate('address');
        },
        address: async (_, { id }) => {
            return await Address.findById(id).populate('residents');
        },
        addresses: async () => {
            return await Address.find().populate('residents');
        },
    },
    Mutation: {
        createPerson: async (_, { input }) => {
            const { address: addressInput, ...personInput } = input;
            const address = new Address(addressInput);
            const savedAddress = await address.save();
            const person = new Person({
                ...personInput,
                address: savedAddress._id,
            });
            const savedPerson = await person.save();
            await Address.findByIdAndUpdate(savedAddress._id, {
                $push: { residents: savedPerson._id },
            });
            return savedPerson.populate('address');
        },
    },
    Person: {
        address: async (person) => {
            return await Address.findById(person.address);
        },
    },
    Address: {
        residents: async (address) => {
            return await Person.find({ address: address._id });
        },
    },
};


export default resolvers;
