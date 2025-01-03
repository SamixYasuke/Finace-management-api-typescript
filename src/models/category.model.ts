import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
  category_name: string;
  priority_type: string;
  category_type: string;
}

const CategorySchema: Schema = new Schema(
  {
    category_name: {
      type: String,
      required: true,
    },
    priority_type: {
      type: String,
      required: true,
      enum: ["need", "want", "saving"],
    },
    category_type: {
      type: String,
      required: true,
      enum: ["income", "expense"],
    },
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model<ICategory>("Category", CategorySchema);
