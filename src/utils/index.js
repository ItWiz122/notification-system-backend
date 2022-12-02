import { User, Notification, MessageCategory } from "../models";
import { users, messageCategories, notifications } from "../data";

const exportData = async (data, Collection) => {
  const isDataExists = await Collection.find();
  if (!isDataExists.length) {
    for (const item of data) {
      await new Collection(item).save();
    }
  }
};

export const loadData = () => {
  exportData(users, User);
  exportData(messageCategories, MessageCategory);
  exportData(notifications, Notification);
};
