const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const passport = require("passport");

const getSignUpForm = (req, res) => {
  res.render("signup");
};

const validateSignupForm = () => {};

const postCreateUser = () => {};

module.exports = { getSignUpForm, validateSignupForm, postCreateUser };
