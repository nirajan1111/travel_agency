import mongoose from "mongoose";
const packageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  backgroundImage: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  duration: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  bestSeason: {
    type: String, 
    required: true,
  },
  accomodation: {
    type: String,
    required: true,
  },
  destination: {
    type: String, 
    required: true,
  },
  difficulty: {
    type: String, 
    required: true,
  },
  overview:{
    type:String, 
    required: true,
  },
  costInclude:[
    {type: String}
  ],
  costExclude:[
    {
      type:String,
    }
  ],
  Itinery:[
    {
      name: {type: String},
      description: {type: String},
    }
  ],
  price: {
    type: String,
    required: true,
  },
  place_list: {
    type: [String],
    required: true,
  },
});

const PackageDesc =
  mongoose.models.PackageDesc || mongoose.model("PackageDesc", packageSchema);

export default PackageDesc;
