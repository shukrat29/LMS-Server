export const responseClient = ({ req, res, message, statusCode = 200 }) => {
  // Success response
  req.success = () => {
    return res.status(statusCode).json({
      status: "success",
      message: message,
    });
  };

  // Error response
  req.error = () => {
    return res.status(statusCode).json({
      status: "error",
      message: message,
    });
  };

  if (statusCode >= 200 && statusCode < 300) {
    return req.success();
  } else {
    return req.error();
  }
};
