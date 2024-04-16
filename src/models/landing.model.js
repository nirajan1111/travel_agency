import  mongoose,{ Schema } from 'mongoose';

const landingSchema = new Schema({
  heading: {type: String, required:true},
  paragraph: {type: String, required:true},
  image: {type: String, required: true},
});
const Landing = mongoose.models.landing || mongoose.model('landing', landingSchema);
export default Landing;