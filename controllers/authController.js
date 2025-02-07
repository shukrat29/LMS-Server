import { responseClient } from "../middleware/responseClient.js";
import { createNewUser } from "../models/user/userModel.js";
import { hashPassword } from "../utils/bcrypt.js";

export const insertNewUser = async (req, res, next) => {
  try {
    // receive the user data
    const { password } = req.body;

    // encrypt the password
    req.body.password = hashPassword(password);

    // insert in to database
    const user = await createNewUser(req.body);
    console.log(user);

    if (user?._id) {
      // create an unique user activation link and send to the user

      const message =
        "We have sent you an email with activation link. Please check your email and follow the instruction to activate your account";
      return responseClient({ req, res, message });
    }

    throw new Error("Unable to create an account, try again later");
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.message = "The email already exist";
      error.statusCode = 400;
    }
    next(error);
  }
};
