import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import process from "process";
import cors from "cors"; //Cross-Origin Resource Sharing

dotenv.config();

// Destructuring
const { STRIPE_SECRET_KEY, DOMAIN } = process.env;

// Secret Stripe Key
const stripe = new Stripe(STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json()); //parse JSON request bodies

app.post("/stripe-payment", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          name: car.model, // Set product name
          description: car.category,
          images: [car.images.profilephoto],
          amount: car.price * 100, // Stripe expects amount in cents
          currency: "usd",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${DOMAIN}?success=true&car_id=${car.car_id}`,
      cancel_url: `${DOMAIN}?canceled=true&car_id=${car.car_id}`,
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error("Error creating checkout session:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});
const port = DOMAIN || 4242;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// will my endpoint and stripe.checkout.sessions.create be an issue?
