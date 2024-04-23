import mongoose, { Schema } from "mongoose";

const inquirySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  message: { type: String, required: true },
  id: { type: String, required: true },
});
const Inquiry =
  mongoose.models.inquiry || mongoose.model("inquiry", inquirySchema);
export default Inquiry;
