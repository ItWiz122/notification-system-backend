import mongoose, { Schema } from "mongoose";

const messageCategorySchema = new Schema(
  {
    name: {
      type: String,
      enum: ["Sports", "Finance", "Movies"],
    },
  },
  { timestamps: true }
).set("toJSON", { virtuals: true });

export default mongoose.model(
  "MessageCategory",
  messageCategorySchema,
  "messageCategories"
);
