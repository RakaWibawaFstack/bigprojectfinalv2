import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
function PlaceOrderScreen(props) {

  const cart = useSelector(state => state.cart);

  const { cartItems, shipping, payment } = cart;
  if (!shipping.address) {
    props.history.push("/shipping");
  } else if (!payment.paymentMethod) {
    props.history.push("/payment");
  }
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    // create an order
  }
  useEffect(() => {

  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }

  return <div>
    <CheckoutSteps step1 step2 step3 step4 ></CheckoutSteps>
    <div className="placeorder">
      <div className="placeorder-info">
        <div>
          <h3>
            Alamat Pengiriman
          </h3>
          <div>
            {cart.shipping.address}, {cart.shipping.city},
          {cart.shipping.postalCode}, {cart.shipping.country},
          </div>
        </div>
        <div>
          <h3>Pembayaran</h3>
          <div>
            Metode Pembayaran: {cart.payment.paymentMethod}
          </div>
        </div>
        <div>
          <ul className="cart-list-container">
            <li>
              <h3>
                Keranjang Belanja
          </h3>
              <div>
                Harga
          </div>
            </li>
            {
              cartItems.length === 0 ?
                <div>
                  Keranjang Kosong
          </div>
                :
                cartItems.map(item =>
                  <li>
                    <div className="cart-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="cart-name">
                      <div>
                        <Link to={"/product/" + item.product}>
                          {item.name}
                        </Link>

                      </div>
                      <div>
                        Qty: {item.qty}
                      </div>
                    </div>
                    <div className="cart-price">
                      Rp{item.price}
                    </div>
                  </li>
                )
            }
          </ul>
        </div>


      </div>
      <div className="placeorder-action">
        <ul>
          <li>
            <button className="button primary full-width" onClick={placeOrderHandler} >Setujui Pesanan</button>
          </li>
          <li>
            <h3>Ringkasan Pemesanan</h3>
          </li>
          <li>
            <div>Barang</div>
            <div>Rp{itemsPrice}</div>
          </li>
          <li>
            <div>Ongkos Kirim</div>
            <div>Rp{shippingPrice}</div>
          </li>
          <li>
            <div>Pajak</div>
            <div>Rp{taxPrice}</div>
          </li>
          <li>
            <div>Total Pesanan</div>
            <div>Rp{totalPrice}</div>
          </li>
        </ul>



      </div>

    </div>
  </div>

}

export default PlaceOrderScreen;