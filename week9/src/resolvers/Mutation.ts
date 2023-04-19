import Person from "../models/personModel";
import Address from "../models/adressModel";

export default {
    async createPerson(parent, {input}, context, info) {
        const address = new Address({
            country: input.country,
            city: input.city,
            street: input.street,
            zipCode: input.zipCode
        });
        await address.save();

        const person = new Person({
            name: input.name,
            age: input.age,
            occupation: input.occupation,
            salary: input.salary,
            address: address.id
        });
        await person.save();

        address.residents.push(person.id);
        await address.save();

        return await Person.findById(person.id).populate('address');

        // const createdPerson = new Person({
        //     name: input.name,
        //     age: input.age,
        //     occupation: input.occupation,
        //     salary: input.salary
        // })
        //
        // const res = await createdPerson.save();
        // return {
        //     id: res._id,
        //     name: res.name,
        //     age: res.age,
        //     occupation: res.occupation,
        //     salary: res.salary
        // }
    },
    async createAddress(parent, {input}, context, info) {
        const createdAddress = new Address({
            country: input.country,
            city: input.city,
            street: input.street,
            zipCode: input.zipCode
        })

        const res = await createdAddress.save();
        return {
            id: res._id,
            country: res.country,
            city: res.city,
            street: res.street,
            zipCode: res.zipCode,
        }

    }
}