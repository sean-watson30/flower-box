import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <img className='footerImg'src="https://i.imgur.com/KxfWH9J.png" alt="logo" />
        <h5>FLOWERBOX / EST. 2019</h5>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
      </div>
      <div>
        <h4>customer service</h4>
        <a href="">SATISFACTION COMMITMENT</a><br />
        <a href="">DELIVERY POLICIES</a><br />
        <a href="">CANCELLATIONS</a><br />
        <a href="">RETURN POLICY</a><br />
      </div>
      <div>
        <h4>flowerbox</h4>
        <a href="">TERMS OF SERVICE</a><br />
        <a href="">PRIVACY POLICY</a><br />
        <a href="">CAREER OPPORTUNITIES</a><br />
        <a href="">MORE INFORMATION</a><br />
      </div>
    </footer>
  );
}

export default Footer;