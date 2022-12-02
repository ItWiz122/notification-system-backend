import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    subscribed: [
      {
        type: Schema.Types.ObjectId,
        ref: "MessageCategory",
        required: true,
      },
    ],
    channels: [
      {
        type: Schema.Types.ObjectId,
        ref: "Notification",
        required: true,
      },
    ],
  },
  { timestamps: true }
).set("toJSON", { virtuals: true });

export default mongoose.model("User", userSchema, "users");
