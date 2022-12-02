import { Notification } from "../models";
import { CustomErrorHandler } from "../services";

export const createNotification = async (req, res, next) => {
  const { type } = req.body;

  try {
    const notification = new Notification({
      type,
    });
    const result = await notification.save();

    res.json(result);
  } catch (error) {
    return next(CustomErrorHandler.serverError(error.message));
  }
};

export const getAllNotifications = async (req, res, next) => {
  try {
    const notifications = await Notification.find().select("-__v");
    res.send(notifications);
  } catch (error) {
    return next(CustomErrorHandler.serverError(error.message));
  }
};
