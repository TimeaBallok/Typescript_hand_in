import Person from "../models/personModel";
import Address from "../models/adressModel";

export default {
    async persons(parent, args, context, info) {
        return await Person.find().populate('address');
    },
    async person(parent, args, context, info) {
        return await Person.findById(args.id).populate('address');
    },
    async address(parent, args, context, info) {
        return await Address.findById(args.id).populate('residents');
    },
    Address: {
        async people(parent, args, context, info) {
            return await Person.find({address: parent.id});
        }
    },
    Person: {
        async address(parent, args, context, info) {
            return await Address.findById(parent.address);
        }
    }
}
