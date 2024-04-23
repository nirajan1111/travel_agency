
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone:{type:String},
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.models.Contact||mongoose.model('Contact', contactSchema);

export default Contact;
