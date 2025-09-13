<template>
  <div class="checkout" data-aos="fade-up">
    <div class="checkout-left">
      <h1>Billing Details</h1>

      <div class="Name">
        <div class="first">
          <label>First Name</label>
          <input type="text" />
        </div>
        <div class="last">
          <label>Last Name</label>
          <input type="text" />
        </div>
      </div>

      <div class="Company d-flex flex-column">
        <label>Company Name (Optional)</label>
        <input type="text" />
      </div>

      <div class="country d-flex flex-column">
        <label>Country / Region</label>
        <select>
          <option value="" disabled selected>Sri Lanka</option>
        </select>
      </div>

      <div class="street d-flex flex-column">
        <label>Street address</label>
        <input type="text" />
      </div>

      <div class="Town d-flex flex-column">
        <label>Town / City</label>
        <input type="text" />
      </div>

      <div class="Province d-flex flex-column">
        <label>Province</label>
        <select>
          <option value="" disabled selected>Western Province</option>
        </select>
      </div>

      <div class="Zip_code d-flex flex-column">
        <label>ZIP code</label>
        <input type="text" />
      </div>

      <div class="Phone d-flex flex-column">
        <label>Phone</label>
        <input type="text" />
      </div>

      <div class="Email d-flex flex-column">
        <label>Email address</label>
        <input type="email" />
      </div>

      <div class="Optional">
        <input type="text" placeholder="Additional information" />
      </div>
    </div>
    <div class="checkout-right">
      <div class="items">
        <div class="data-info">
          <div class="info-heading d-flex justify-content-between">
            <h4>Product</h4>
            <h4>Subtotal</h4>
          </div>
          <div class="info-name d-flex justify-content-between">
            <p>Asgaard sofa <span> x 1</span></p>
            <p class="RS">Rs. 250,000.00</p>
          </div>
          <div class="info-sub d-flex justify-content-between">
            <h4>Subtotal</h4>
            <p class="RS">Rs. 250,000.00</p>
          </div>
          <div class="info-total d-flex justify-content-between">
            <h4>Total</h4>
            <p>Rs. 250,000.00</p>
          </div>
        </div>
        <div class="payment">
          <div class="direct d-flex">
            <i class="fa-solid fa-circle"></i>
            <h5>Direct Bank Transfer</h5>
          </div>
          <p>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <div class="direct-cash">
            <div class="first d-flex">
              <i class="fa-regular fa-circle"></i>
              <h5>Direct Bank Transfer</h5>
            </div>
            <div class="last2 d-flex">
              <i class="fa-regular fa-circle"></i>
              <h5>Cash On Delivery</h5>
            </div>
          </div>
          <p class="person-data">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <span>privacy policy.</span>
          </p>
          <div class="botton">Place Order</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.checkout {
  width: 86%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.checkout-left {
  width: 60%;
  padding: 0 3.5rem;
}
.checkout-left h1 {
  font-weight: 600;
  font-size: 36px;
}
.checkout-left label {
  font-weight: 500;
  font-size: 16px;
  padding: 1.5rem 0;
}
.checkout-left input,
select {
  box-sizing: border-box;
  width: 460px;
  height: 70px;
  left: 176px;
  top: 807px;
  border: 1px solid #9f9f9f;
  border-radius: 10px;
  padding-right: 1rem;
  padding-left: 1rem;
  font-weight: 400;
  font-size: 16px;
  color: #9f9f9f;
}
.Name {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
}
.Name .first,
.last {
  display: flex;
  flex-direction: column;
}
.Name .first input,
.Name .last input {
  width: 211px;
  height: 75px;
  border: 1px solid #9f9f9f;
  border-radius: 10px;
}
.Optional {
  margin: 4rem 0;
}
.checkout-right {
  width: 50%;
  padding: 2rem 1rem;
}
.items {
  width: 83%;
}
.data-info {
  border-bottom: 1px solid #d9d9d9;
}
.info-heading {
  padding-bottom: 0.5rem;
}
.info-heading h4 {
  font-weight: 500;
  font-size: 24px;
}

.info-name {
  align-items: center;
}
.info-name p {
  font-weight: 400;
  font-size: 16px;
  color: #9f9f9f;
}
.info-name span {
  font-weight: 500;
  font-size: 16px;
  color: #000000;
}
.info-name .RS {
  font-weight: 300;
  font-size: 16px;
  color: #000000;
}

.info-sub {
  align-items: center;
}
.info-sub h4 {
  font-weight: 500;
  font-size: 16px;
}
.info-sub .RS {
  font-weight: 300;
  font-size: 16px;
  color: #000000;
}

.info-total {
  padding-bottom: 1rem;
  align-items: center;
}
.info-total h4 {
  font-weight: 500;
  font-size: 16px;
}
.info-total p {
  font-weight: 700;
  font-size: 24px;
  color: #b88e2f;
}
.payment {
  margin-top: 1rem;
}
.direct {
  align-items: center;
  gap: 0.5rem;
}
.direct h5 {
  font-weight: 500;
  font-size: 18px;
  margin: 0;
}
p {
  font-weight: 600;
  font-size: 16px;
  text-align: justify;
  color: #9f9f9f;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.direct-cash {
  margin: 1rem 0;
}
.direct-cash .first,
.last2 {
  align-items: center;
  gap: 0.5rem;
}
.direct-cash h5 {
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  color: #9f9f9f;
}
.direct-cash .fa-circle {
  color: #9f9f9fed;
}
.person-data {
  font-weight: 300;
  font-size: 17px;
  text-align: justify;
  color: #000000;
}
.person-data span {
  font-weight: 600;
  font-size: 16px;
  text-align: justify;
  color: #000000;
}
.botton {
  box-sizing: border-box;
  width: 50%;
  margin: auto;
  border: 1px solid #000000;
  border-radius: 15px;
  padding: 0.7rem 3rem;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  margin-top: 2.5rem;
}
@media screen and (max-width: 576px) {
  .checkout {
    display: block;
  }
  .checkout-left {
    width: 70%;
    padding: 0rem;
    margin: auto;
  }
  .checkout-left h1 {
    font-size: 12px;
    text-align: center;
    margin-bottom: 1rem;
  }
  .Name {
    display: block;
    margin-bottom: 1rem;
  }
  .Name .first input,
  .Name .last input {
    width: 100%;
    height: 30px;
    margin-bottom: 0rem;
  }
  .Name .first label,
  .Name .last label {
    margin-bottom: 0rem;
    display: flex;
    justify-content: center;
  }
  .checkout-left label {
    font-size: 10px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    padding: 0;
  }
  .checkout-left input,
  select {
    width: 100%;
    height: 30px;
    font-size: 11px;
    font-weight: 600;
  }
  .Optional {
    margin: 1rem 0;
  }
  .checkout-right {
    width: 100%;
    padding-bottom: 1rem;
  }
  .items {
    width: 100%;
  }
  .info-heading {
    padding-bottom: 0rem;
  }
  .info-heading h4 {
    font-size: 10px;
  }
  .info-name p {
    font-size: 10px;
  }
  .info-name span {
    font-size: 10px;
  }
  .info-name .RS {
    font-weight: 500;
    font-size: 10px;
  }
  .info-sub h4 {
    font-size: 10px;
  }
  .info-sub .RS {
    font-size: 10px;
  }
  .info-total h4 {
    font-size: 10px;
  }
  .info-total p {
    font-size: 10px;
  }
  .payment {
    margin-top: 1rem;
  }
  .direct h5 {
    font-size: 10px;
  }
  .direct .fa-circle {
    font-size: 10px;
  }
  p {
    font-size: 7px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .direct-cash {
    margin-bottom: 1rem;
  }
  .direct-cash .first,
  .last2 {
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .direct-cash h5 {
    font-size: 10px;
  }
  .direct-cash .fa-circle{
    font-size: 10px;
  }
  .person-data {
    font-size: 7px;
  }
  .person-data span {
    font-size: 7px;
  }
  .botton {
    width: 40%;
    padding: 0.2rem 1rem;
    font-size: 11px;
    margin-top: 1rem;
  }
}
</style>
