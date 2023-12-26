import { FC } from 'react';
import successMessage from 'assets/images/success-message.webp';
import './index.scss';

const FormMessage: FC = () => {
  return (
    <section className="form-message">
      <h2>User successfully registered</h2>
      <img src={successMessage} alt="Success Message" />
    </section>
  );
};

export default FormMessage;
