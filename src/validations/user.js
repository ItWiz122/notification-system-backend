import joi from "joi";

export const createUserValidationSchema = joi.object({
  name: joi.string().min(3).max(30).required(),
  email: joi.string().email().required(),
  phoneNumber: joi.string(),
  subscribed: joi.array().min(1).required(),
  channels: joi.array().min(1).required(),
});
