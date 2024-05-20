import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  images:Array<String>,
});

export default mongoose.model("category", categorySchema);