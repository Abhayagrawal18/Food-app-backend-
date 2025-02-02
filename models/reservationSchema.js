import mongoose from "mongoose";
import validator from "validator"

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true,
        minLength:[3 , "First name must contain the at least 3 word"],
        maxLength:[30 , "First name should not exceed  30 word"],
    },
    lastName: {
        type: String,
        required:true,
        minLength:[3 , "Last name must contain the at least 3 word"],
        maxLength:[30 , "Last name should not exceed  30 word"],
    },
    email: {
        type: String,
        required:true,
        validate: [validator.isEmail , "provide a valid email"],
    },
    phone: {
        type: String,
        required: true,
        minLength:[10 , "Phone number must contain the at least 10 word"],
        maxLength:[10 , "Phone number should not exceed  10 word"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,

    },
})

export const Reservation = mongoose.model("Reservation" , reservationSchema );