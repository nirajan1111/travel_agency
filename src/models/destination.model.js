import mongoose from 'mongoose';
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tourCount: {
    type: Number,
    default: 0,
  },
  image:{
    type:String, 
    required:true
  }
});

const Tour =mongoose.models.Tour|| mongoose.model('Tour', tourSchema);

export default Tour;