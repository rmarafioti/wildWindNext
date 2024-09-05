import Stripe from "stripe";
import { buffer } from "micro"; // Import buffer for raw body parsing (or use Node.js buffer alternative)

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export const config = {
  api: {
    bodyParser: false, // Disable bodyParser to handle raw request body from Stripe webhook
  },
};

// Stripe checkout session handler (existing working code)
export default async function handler(req, res) {
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

      return res.status(200).json({ clientSecret: session.client_secret });
    } catch (error) {
      console.error("Error creating Stripe checkout session:", error);
      return res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }
}

// New Webhook handler
export async function webhookHandler(req, res) {
  if (req.method === "POST") {
    const signature = req.headers["stripe-signature"];
    let event;

    try {
      // Get raw body for webhook signature verification
      const rawBody = await buffer(req);

      // Verify the webhook signature using the raw body
      event = stripe.webhooks.constructEvent(
        rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET // Make sure you set this environment variable in your .env
      );
    } catch (err) {
      console.error("⚠️  Webhook signature verification failed.", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        console.log("Payment was successful:", session);
        // Add any logic to handle successful payments, such as order fulfillment.
        break;

      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        console.log("PaymentIntent succeeded:", paymentIntent);
        break;

      case "payment_intent.payment_failed":
        const failedIntent = event.data.object;
        console.log("PaymentIntent failed:", failedIntent);
        break;

      // Handle other event types here, if needed
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    // Respond with success status to Stripe
    return res.status(200).json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }
}
