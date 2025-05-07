"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with the public key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_KEY as string
);

interface CheckoutButtonProps {
  amount: number;
  description: string;
  customerId?: string;
  propertyId?: string;
}

export function RentPaymentButton({
  amount,
  description,
  customerId,
  propertyId,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      
      // In a real application, this would be an API call to your backend
      // to create a Stripe Checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          description,
          customerId,
          propertyId,
        }),
      });

      const session = await response.json();
      
      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error("Erreur de redirection vers Stripe:", error);
      }
    } catch (error) {
      console.error("Erreur lors du paiement:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium transition-colors disabled:opacity-50"
    >
      {loading ? "Chargement..." : `Payer ${amount.toFixed(2)}€`}
    </button>
  );
} 