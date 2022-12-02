import joi from "joi";

export const createLogValidationSchema = joi.object({
  categoryId: joi.string().required(),
  message: joi.string().required(),
});
