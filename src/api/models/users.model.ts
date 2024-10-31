import mongoose from "mongoose";

const dbUserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", dbUserSchema);

export default User;
