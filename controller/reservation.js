import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async(req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;
  if ( !firstName || !lastName || !email || !date || !time || !phone) {
    return next(
      new ErrorHandler("Please fill the form correctly ", 400)
    );
  }
  try {
    await Reservation.create({ firstName, lastName, email, date, time, phone });
    res.status(200).json({
      sucess: true,
      message: "Reservation sent succesfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(","), 400));
    }
    return next(error);
  }
};
