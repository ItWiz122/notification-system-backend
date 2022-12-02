import { MessageCategory } from "../models";
import { CustomErrorHandler } from "../services";

export const createMessageCategory = async (req, res, next) => {
  const { name } = req.body;

  try {
    const messageCategory = new MessageCategory({
      name,
    });
    const result = await messageCategory.save();

    res.json(result);
  } catch (error) {
    return next(CustomErrorHandler.serverError(error.message));
  }
};

export const getAllMessageCategories = async (req, res, next) => {
  try {
    const messageCategories = await MessageCategory.find().select("-__v");
    res.send(messageCategories);
  } catch (error) {
    return next(CustomErrorHandler.serverError(error.message));
  }
};
