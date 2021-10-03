const Details = () => {
  return (
    <div className="container">
      <div class="orderDetailsDiv">
        <div class="row">
          <h3>Order Details</h3>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-xs-12">
            <label>Order ID</label>
            <input type="text" class="form-control " id="orderID" placeholder="Order ID"/>
          </div>
          <div class="col-lg-6 col-md-6 col-xs-12">
            <label>Description</label>
            <input type="text" class="form-control " id="desc" placeholder="Description"/>
            </div>
          </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-xs-12">
            <label>Quantity</label>
            <input type="text" class="form-control " id="qty" placeholder="Quantity"/>
          </div>
          <div class="col-lg-6 col-md-6 col-xs-12">
            <label>Address</label>
            <input type="text" class="form-control " id="address" placeholder="Address"/>
            </div>
        </div>
      </div>

    </div>
  )
}
export default Details;