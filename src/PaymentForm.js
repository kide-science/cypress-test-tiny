import { useStripe } from '@stripe/react-stripe-js';

export function PaymentForm() {
  const stripe = useStripe();

  async function handleSubmit(event) {
    event.preventDefault();
    stripe.redirectToCheckout({ sessionId: 'cs_test_b1ikekzWgy3zeN716wIpFjjPcJNqP7wUGd7wqmYFxogJTdAEl22N3Wl6fa' });
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <button type="submit">Go</button>
    </form>
  );
}
