import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { PaymentForm } from './PaymentForm'

function App() {
  return (
    <Elements stripe={loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx')}>
      <PaymentForm></PaymentForm>
    </Elements>
  );
}

export default App;
