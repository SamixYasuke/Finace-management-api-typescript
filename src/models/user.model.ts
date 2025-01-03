import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  first_name: string;
  second_name: string;
  email: string;
  password: string;
  otp: string;
  otp_expires_at: Date;
}

const UserSchema: Schema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    second_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    total_balance: {
      type: Number,
      required: false,
    },
    otp: {
      type: String,
      required: false,
    },
    otp_expires_at: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<IUser>("User", UserSchema);
