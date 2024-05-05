import { query } from "express-validator";

export const rules = [
  query("longitude")
    .notEmpty()
    .withMessage("The longitude parameter must be provided")
    .isNumeric()
    .withMessage("The longitude parameter must be numeric"),
  query("latitude")
    .notEmpty()
    .withMessage("The latitude parameter must be provided")
    .isNumeric()
    .withMessage("The latitude parameter must be numeric"),
];
