import { Schema, model } from "mongoose";

const subscriptionSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Subscription = model("Subscription", subscriptionSchema);

export default Subscription;
