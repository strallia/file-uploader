const { Router } = require("express");
const authRouter = Router();
const authController = require("../controllers/authController");

// GET routes
authRouter.get("/sign-up", authController.getSignUpForm);

// POST routes
authRouter.post(
  "/sign-up",
  authController.validateSignupForm,
  authController.postCreateUser,
);

module.exports = authRouter;
