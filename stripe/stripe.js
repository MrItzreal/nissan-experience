import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import process from "process";
import cors from "cors"; //Cross-Origin Resource Sharing

dotenv.config();

// Destructuring
const { STRIPE_SECRET_KEY, DOMAIN, PORT } = process.env;

// Secret Stripe Key
const stripe = new Stripe(STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json()); //parse JSON request bodies

app.post("/stripe-payment", async (req, res) => {
  try {
    const { car } = req.body;

    // Converts the price from a comma-separated string to an integer in cents
    const priceInCents = parseInt(car.price.replace(/,/g, ""), 10) * 100;

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: priceInCents,
            product_data: {
              name: car.model,
              description: car.category,
            },
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${DOMAIN}?cancel`,
    });
    res.json({ url: session.url });
  } catch (err) {
    console.error("Error creating checkout session:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
