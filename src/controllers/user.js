import { User } from "../models";
import { CustomErrorHandler } from "../services";

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find().select("-password -__v");
  } catch (error) {
    return next(CustomErrorHandler.serverError(error.message));
  }
  res.send(users);
};

export const createUser = async (req, res, next) => {
  const { email } = req.body;
  try {
    const exist = await User.exists({ email: email });
    if (exist) {
      return next(
        CustomErrorHandler.alreadyExist("This email is already taken.")
      );
    }
  } catch (err) {
    return next(err);
  }

  const user = new User(req.body);

  let result;
  try {
    result = await user.save();
  } catch (error) {
    return next(CustomErrorHandler.serverError(error.message));
  }

  res.json(result);
};
