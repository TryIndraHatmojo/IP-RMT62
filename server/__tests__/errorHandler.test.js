const errorHandler = require("../middlewares/errorHandler");

describe("errorHandler middleware", () => {
  let req, res, next;
  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  it("should handle SequelizeValidationError", () => {
    const error = {
      name: "SequelizeValidationError",
      errors: [{ message: "Validation error" }],
    };
    errorHandler(error, req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "Validation error" });
  });

  it("should handle SequelizeUniqueConstraintError", () => {
    const error = {
      name: "SequelizeUniqueConstraintError",
      errors: [{ message: "Unique error" }],
    };
    errorHandler(error, req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "Unique error" });
  });

  it("should handle ErrorDataNotFound", () => {
    const error = { name: "ErrorDataNotFound", message: "Data not found" };
    errorHandler(error, req, res, next);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Data not found" });
  });

  it("should handle ValidationError", () => {
    const error = { name: "ValidationError", message: "Validation failed" };
    errorHandler(error, req, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "Validation failed" });
  });

  it("should handle AuthenticationError", () => {
    const error = { name: "AuthenticationError", message: "Auth failed" };
    errorHandler(error, req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: "Auth failed" });
  });

  it("should handle UnauthorizedError", () => {
    const error = { name: "UnauthorizedError" };
    errorHandler(error, req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: "Authentication Error - Invalid Token",
    });
  });

  it("should handle JsonWebTokenError", () => {
    const error = { name: "JsonWebTokenError" };
    errorHandler(error, req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: "Authentication Error - Invalid Token",
    });
  });

  it("should handle ForbiddenError", () => {
    const error = { name: "ForbiddenError" };
    errorHandler(error, req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      message: "Unauthorized - You don't have permission to do this action",
    });
  });

  it("should handle unknown error", () => {
    const error = { name: "UnknownError" };
    errorHandler(error, req, res, next);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Internal Server Error" });
  });
});
