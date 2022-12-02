import mongoose, { Schema } from "mongoose";

const notificationSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["SMS", "E-mail", "Push Notification"],
    },
  },
  { timestamps: true }
).set("toJSON", { virtuals: true });

export default mongoose.model(
  "Notification",
  notificationSchema,
  "notifications"
);
