import mongoose, { Schema } from "mongoose";


const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;