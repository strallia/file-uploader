const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const passport = require("passport");

const getSignUpForm = (req, res) => {
  res.render("signup");
};

const validateSignupForm = [
  [
    body("email")
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Please enter valid email address (e.g. first@last.com)"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("confirm-password")
      .notEmpty()
      .withMessage("Re-enter your password")
      .custom((value, { req }) => value === req.body.password)
      .withMessage("Passwords do not match"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("signup", { errors: errors.array(), ...req.body });
    }
    next();
  },
];

const postCreateUser = (req, res) => {};

module.exports = { getSignUpForm, validateSignupForm, postCreateUser };
