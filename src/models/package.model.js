import mongoose from "mongoose";
const packageSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  price: { type: String, required: true },
  duration: { type: String, required: true },
  activity: { type: String, required: true },
  destination: { type: mongoose.Schema.Types.ObjectId, ref: "tours", required: true },
  overview: { type: String, required: true },
  included: [{ type: String }],
  excluded: [{ type: String }],
  highlights: [{ type: String }],
  itinerary: [
    {
      title: { type: String, required: true },
      paragraph: { type: String, required: true },
    },
  ],
  image: { type: String, required: true },
});

const PackageDesc =
  mongoose.models.PackageDesc || mongoose.model("PackageDesc", packageSchema);

export default PackageDesc;
