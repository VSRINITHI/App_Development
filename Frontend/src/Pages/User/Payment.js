import React, { useState } from 'react';
import '../../Assets/Css/Payment.css';
import Navbar from '../../Components/Ui/Navbar';
import Footer from '../../Components/Ui/Footer';
import credit from '../../Assets/Images/creditcard.jpeg';
function Payment() {
  const [paymentType, setPaymentType] = useState('card');
  
  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission
    document.getElementById('payment-form').reset();
  };

  return (
    <div className="payment-container">
      <Navbar/>
      <div className="main">
        <div className="left-illustration">
          <img src={credit} alt="credit card"/>
        </div>
        <div className="right-payment-info">
          <div className="payment-method">
            <h2>Payment Method</h2>
            <div className="radio-container">
              <label htmlFor="card">Card</label>
            </div>
          </div>
          <form id="payment-form">
            <div className="card-info-container">
              <div className="card-info">
                <label>
                  Card Number
                  <input
                    className="full-width"
                    id="card-num"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                  />
                </label>
                <label>
                  Name on Card
                  <input
                    className="full-width"
                    id="name"
                    type="text"
                    placeholder="Steve Rogers"
                  />
                </label>
                <div className="expire-ccv">
                  <label>
                    Expires
                    <span className="expire-date">
                      <input
                        id="month"
                        type="text"
                        size="2"
                        maxLength="2"
                        placeholder="MM"
                      />
                      <span>/</span>
                      <input
                        id="year"
                        type="text"
                        size="2"
                        maxLength="2"
                        placeholder="YY"
                      />
                    </span>
                  </label>
                  <label>
                    CCV
                    <input
                      id="ccv"
                      type="text"
                      size="3"
                      maxLength="3"
                      placeholder="123"
                    />
                  </label>
                </div>
              </div>
            </div>
            <label className="save-card-info">
              <input type="checkbox" />
              Save card for faster checkout
            </label>
          </form>
          <button className="button" onClick={handleSubmit}>
            Place Your Order
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Payment;
