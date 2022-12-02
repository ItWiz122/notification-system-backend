import mongoose, { Schema } from "mongoose";

const logSchema = new Schema(
  {
    name: {
      type: String,
    },
    messageCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MessageCategory",
    },
    notification: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notification",
    },
  },
  { timestamps: true }
).set("toJSON", { virtuals: true });

export default mongoose.model("log", logSchema, "logs");
