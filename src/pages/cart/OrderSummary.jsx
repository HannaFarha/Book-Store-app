const OrderSummary = ({books}) => {
    return (  <div className="cart-order-summary">
    <h5 className="order-summary-title">ORDER SUMMARY</h5>
    <div className="order-summary-item">
      <span>Subtotal</span>
      <span>
        $
        {books.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
      </span>
    </div>
    <div className="order-summary-item">
      <span>Shipping Cost</span>
      <span>0</span>
    </div>
    <div className="order-summary-item">
      <span>Discount</span>
      <span>0</span>
    </div>
    <div className="order-summary-item">
      <strong>Total</strong>
      <span>
        $
        {books.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
      </span>
    </div> </div>  );
}
 
export default OrderSummary;