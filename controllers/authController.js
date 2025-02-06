export const insertNewUser = (req, res, next) => {
  try {
    // Todo signup process
    // receive the user data
    // encrypt the password
    // insert in to database

    // create an unique user activation link and send to their email
    res.json({
      status: "success",
      message: "Todo",
    });
  } catch (error) {
    console.log(error);
  }
};
