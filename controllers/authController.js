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

    if (user?._id) {
      res.json({
        status: "success",
        message: "User registered successfully",
      });
      return;
    }
    // create an unique user activation link and send to the user
    res.json({
      status: "error",
      message: "Unable to create an account, try again later",
    });
  } catch (error) {
    console.log(error);
  }
};
