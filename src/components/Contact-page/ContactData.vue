<template>
  <div class="contact" data-aos="fade-up">
    <div class="tittle">
      <h1>Get In Touch With Us</h1>
      <p>
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>
    </div>
    <div class="contact-data">
      <div class="data-left">
        <div class="data">
          <div class="icon"><i class="fa-solid fa-location-dot"></i></div>
          <div class="text">
            <h3>Address</h3>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
        </div>
        <div class="data">
          <div class="icon"><i class="fa-solid fa-phone"></i></div>
          <div class="text">
            <h3>Phone</h3>
            <p>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
          </div>
        </div>
        <div class="data">
          <div class="icon"><i class="fa-solid fa-clock"></i></div>
          <div class="text">
            <h3>Working Time</h3>
            <p>
              Monday-Friday: 9:00 - 22:00 <br />Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>
      </div>
      <div class="data-right">
        <div class="name">
          <label>Your name</label>
          <input type="text" placeholder="Abc" />
        </div>
        <div class="email">
          <label>Email Address</label>
          <input type="email" placeholder="Abc@def.com" />
        </div>
        <div class="subject">
          <label>Subject</label>
          <input type="text" placeholder="This is an optional" />
        </div>
        <div class="message">
          <label>Message</label>
          <input type="text" placeholder="Hi! i’d like to ask about" />
        </div>
        <div class="button">Submit</div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.contact {
  margin-bottom: 3rem;
}
.tittle {
  text-align: center;
}
.tittle h1 {
  font-weight: 600;
  font-size: 36px;
}
.tittle p {
  font-weight: 400;
  font-size: 16px;
  color: #9f9f9f;
  width: 37%;
  margin: auto;
}
.contact-data {
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 5rem;
}
.data-left {
  width: 43%;
}
.data-left .data {
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 1rem 4rem;
}
.icon {
  width: 10%;
}
.text {
  width: 80%;
}
.icon .fa-location-dot {
  width: 22px;
  height: 28px;
}
.icon .fa-phone {
  width: 28px;
  height: 28px;
}
.icon .fa-clock {
  width: 23px;
  height: 23px;
}
.data .text h3 {
  font-weight: 500;
  font-size: 24px;
}
.data .text p {
  font-weight: 400;
  font-size: 16px;
  color: #000000;
}
.data-right {
  width: 55%;
  padding: 0 1rem;
}
.name,
.message,
.email,
.subject {
  display: flex;
  flex-direction: column;
}
label {
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  margin-bottom: 1rem;
}
input {
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #9f9f9f;
  border-radius: 10px;
  width: 85%;
  height: 70px;
  margin-bottom: 2rem;
  padding: 1rem;
}
.message input {
  height: 120px;
}
.button {
  width: 43%;
  box-sizing: border-box;
  background: #b88e2f;
  border: none;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  padding: 0.5rem 1.5rem;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  transition: all 0.3s ease;
}
.button:hover {
  background: #d7a93e;
  color: #ffffff;
  box-shadow: 0 0 12px rgb(125, 121, 121);
}
@media screen and (max-width: 576px) {
  .tittle {
    text-align: center;
  }
  .tittle h1 {
    font-size: 16px;
  }
  .tittle p {
    font-size: 10px;
    width: 64%;
  }
  .contact {
    margin-bottom: 0rem;
  }
  .data-left {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  .data-left .data {
    justify-content: space-between;
    width: 50%;
    gap: 1.3rem;
    padding: 0rem 0rem;
  }
  .icon {
    width: 2%;
  }
  .text {
    width: 100%;
  }
  .icon .fa-location-dot {
    width: 11px;
    height: 15px;
  }
  .icon .fa-phone {
    width: 15px;
    height: 15px;
  }
  .icon .fa-clock {
    width: 15px;
    height: 15px;
  }
  .data .text h3 {
    font-size: 10px;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  .data .text p {
    font-size: 8px;
    font-weight: 300;
  }
  .contact-data {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column-reverse;
    padding-top: 1rem;
  }
  .data-right {
    width: 100%;
    padding: 0rem;
  }
  label {
    font-size: 10px;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  input {
    width: 100%;
    height: 11%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 0.5rem;
  }
  .message input {
    height: 60px;
  }
  .button {
    width: 23%;
    margin: auto;
    font-size: 8px;
    font-weight: 400;
    text-align: center;
    align-items: center;
    padding: 0.4rem 0rem;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .contact-data {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column-reverse;
    padding-top: 1rem;
  }
  .tittle h1 {
    font-size: 18px;
  }
  .tittle p {
    font-size: 12px;
    width: 65%;
  }
  .contact {
    margin-bottom: 1rem;
  }
  .data-left {
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  .data-left .data {
    justify-content: space-between;
    width: 33%;
    gap: 0.3rem;
    padding: 0rem 0rem;
  }
  .icon {
    width: 20%;
  }
  .text {
    width: 100%;
    margin: 0;
  }
  .icon .fa-location-dot {
    width: 13px;
    height: 17px;
  }
  .icon .fa-phone {
    width: 17px;
    height: 17px;
  }
  .icon .fa-clock {
    width: 17px;
    height: 17px;
  }
  .data .text h3 {
    font-size: 16px;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  .data .text p {
    font-size: 9px;
    font-weight: 300;
    width: 100%;
  }
  .data-right {
    width: 65%;
    margin: auto;
    padding: 0rem;
  }
  label {
    font-size: 11px;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  input {
    width: 100%;
    height: 11%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 0.5rem;
  }
  .message input {
    height: 60px;
  }
  .button {
    width: 23%;
    margin: auto;
    font-size: 10px;
    padding: 0.4rem 0rem;
    margin-bottom: 1rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .contact-data {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column-reverse;
    padding-top: 1rem;
  }
  .tittle h1 {
    font-size: 20px;
  }
  .tittle p {
    font-size: 14px;
    width: 65%;
  }
  .contact {
    margin-bottom: 1rem;
  }
  .data-left {
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  .data-left .data {
    justify-content: space-between;
    width: 33%;
    gap: 0.3rem;
    padding: 0rem 0rem;
  }
  .icon {
    width: 20%;
  }
  .text {
    width: 100%;
    margin: 0;
  }
  .icon .fa-location-dot {
    width: 20px;
    height: 20px;
  }
  .icon .fa-phone {
    width: 20px;
    height: 20px;
  }
  .icon .fa-clock {
    width: 20px;
    height: 20px;
  }
  .data .text h3 {
    font-size: 18px;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  .data .text p {
    font-size: 11px;
    font-weight: 300;
    width: 100%;
  }
  .data-right {
    width: 65%;
    margin: auto;
    padding: 0rem;
  }
  label {
    font-size: 13px;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  input {
    width: 100%;
    height: 11%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 0.7rem;
  }
  .message input {
    height: 60px;
  }
  .button {
    width: 26%;
    margin: auto;
    font-size: 12px;
    padding: 0.4rem 0rem;
    margin-bottom: 1rem;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1440px) {
  .tittle p {
    width: 56%;
  }
  .contact-data {
    padding-top: 2rem;
  }
  .data-left {
    width: 40%;
  }
  .data-left .data {
    padding: 1rem 3rem;
  }
  .icon .fa-location-dot {
    width: 20px;
    height: 26px;
  }
  .icon .fa-phone {
    width: 25px;
    height: 25px;
  }
  .icon .fa-clock {
    width: 23px;
    height: 23px;
  }
  .data .text h3 {
    font-size: 20px;
  }
  .data .text p {
    width: 100%;
    font-size: 15px;
  }
  input {
    height: 50px;
  }
  .message input {
    height: 90px;
  }
}
</style>
