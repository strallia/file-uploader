const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

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

const postCreateUser = (req, res, next) => {
  // Create new user in database with hashed password
  bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
    if (err) return next(err);
    const { email } = req.body;
    try {
      await prisma.users.create({
        data: {
          email,
          hash_pass: hashedPassword,
        },
      });
      res.send(`created user`);
    } catch (err) {
      return next(err);
    }
  });
};

const getLoginForm = (req, res) => {
  res.render("login");
};

module.exports = {
  getSignUpForm,
  validateSignupForm,
  postCreateUser,
  getLoginForm,
};
