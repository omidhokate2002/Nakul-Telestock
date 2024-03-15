import express from "express";
import { connect, model } from "mongoose";
import { json } from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

connect("mongodb://localhost:27017/nakul-telestock", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Subscription = model("Subscription", {
  email: String,
});

app.use(json());

app.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const subscription = new Subscription({ email });
    await subscription.save();

    res.status(201).json({ message: "Subscription successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
