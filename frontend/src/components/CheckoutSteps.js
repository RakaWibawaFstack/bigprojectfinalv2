import React from 'react';
function CheckoutSteps(props) {
  return <div className="checkout-steps">
    <div className={props.step1 ? 'active' : ''} >Signin</div>
    <div className={props.step2 ? 'active' : ''} >Pengiriman</div>
    <div className={props.step3 ? 'active' : ''} >Pembayaran</div>
    <div className={props.step4 ? 'active' : ''} >Ringkasan Belanja</div>
  </div>
}

export default CheckoutSteps;