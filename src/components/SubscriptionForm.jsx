import "./SubscriptionForm.css";
import { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      email,
    });
  };

  return (
    <div className="form-container">
      <h2>Subscription Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default SubscriptionForm;
