function errorHandler(error, req, res, next) {
  console.log(error);

  if (
    error.name === "SequelizeValidationError" ||
    error.name === "SequelizeUniqueConstraintError"
  ) {
    res.status(400).json({ message: error.errors[0].message });
  } else if (error.name === "ErrorDataNotFound") {
    res.status(404).json({ message: error.message });
  } else if (error.name === "ValidationError") {
    res.status(400).json({ message: error.message });
  } else if (error.name === "AuthenticationError") {
    res.status(401).json({ message: error.message });
  } else if (
    error.name === "UnauthorizedError" ||
    error.name === "JsonWebTokenError"
  ) {
    res.status(401).json({ message: "Authentication Error - Invalid Token" });
  } else if (error.name === "ForbiddenError") {
    res.status(403).json({
      message: "Unauthorized - You don't have permission to do this action",
    });
  } else if (
    error.message &&
    (error.message.includes("No token provided") ||
      error.message.includes("invalid signature") ||
      error.message.includes("jwt malformed") ||
      error.message.includes("invalid token"))
  ) {
    res.status(401).json({ message: "Authentication Error - Invalid Token" });
  } else if (
    error.message &&
    error.message.toLowerCase().includes("token") &&
    error.message.toLowerCase().includes("required")
  ) {
    res.status(400).json({ message: error.message });
  } else if (error.code === "ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING_FLAG") {
    res.status(400).json({ message: "Dynamic import callback missing flag" });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = errorHandler;
