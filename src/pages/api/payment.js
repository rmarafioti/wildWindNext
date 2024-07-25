import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req = NextApiRequest,
  res = NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [
          {
            price: "price_1PLr75Clew7ziQf5NnzXpF1B",
            quantity: 1,
          },
        ],
        ui_mode: "embedded",
        redirect_on_completion: "never",
      });

      res.status(200).json({ clientSecret: session.client_secret });
    } catch (error) {
      console.error("Error creating Stripe checkout session:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
