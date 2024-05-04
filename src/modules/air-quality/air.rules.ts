import { param } from "express-validator";

export const rules = [
  param("longitude")
    .notEmpty()
    .withMessage("The longitude parameter must be provided")
    .isNumeric()
    .withMessage("The longitude value must be numeric"),
  param("latitude")
    .notEmpty()
    .withMessage("The latitude parameter must be provided")
    .isNumeric()
    .withMessage("The latitude value must be numeric"),
];
