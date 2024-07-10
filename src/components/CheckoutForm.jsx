import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";

const stripePromise = loadStripe("pk_test_UbdDokx4p8LKUNZRwzbkXZeo00xKo7MiZH");

/**
 * @component CheckoutForm handles the Stripe api call for user payment processing via the Stripe embedded form
 */
export default function CheckoutForm() {
  const router = useRouter();
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("/api/payment", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout
          onSuccess={(event) => {
            // Handle success here, for example, redirect to the return page
            const sessionId = event.session_id;
            router.push(`/return?session_id=${sessionId}`);
          }}
          onCancel={() => {
            // Handle cancel here (e.g., redirect to a cancel page, show a message, etc.)
            alert("Payment cancelled.");
          }}
        />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
