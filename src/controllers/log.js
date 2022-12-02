import { Log, User } from "../models";
import { CustomErrorHandler } from "../services";

export const getAllLogs = async (req, res, next) => {
  let logs;
  try {
    logs = await Log.find().select("-__v");
  } catch (error) {
    return next(CustomErrorHandler.serverError(error.message));
  }
  res.send(logs);
};

export const createLog = async (req, res, next) => {
  const { categoryId, message } = req.body;

  try {
    const logs = [];
    const users = await User.find().populate("subscribed").populate("channels");

    for (const user of users) {
      if (user.subscribed.find((el) => el.id === categoryId)) {
        for (const notification of user.channels) {
          for (const category of user.subscribed) {
            const newLog = new Log({
              name: `Notification of ${category.name} sent via ${notification.type} to ${user.name}`,
              messageCategory: category.id,
              notification: notification.id,
            });
            logs.push(newLog);
          }
        }
      }
    }

    for (const log of logs) {
      await log.save();
    }

    res.json(logs);
  } catch (error) {}
};
