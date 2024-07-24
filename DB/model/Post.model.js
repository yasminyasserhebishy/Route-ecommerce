import mongoose, { Schema, model, Types } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model.Post || model("Post", postSchema);
export default postModel;
