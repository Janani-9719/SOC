const Content = () => {
     <div className="container">
        <h3 className="title1">Shooping cart</h3>
        <div className="row">
             <div className="col-lg-8 col-sm-12">
                 <div className="container-fluid divs">
                     <label className="labels" >Seller </label>
                     <label id="seller_name" className="labels">Amazon popup store</label>
                    {/* /* <label className="labels request_label">Request total</label>*/ }
                 </div>
                 <div className="row ">
                     <img src="https://i.ebayimg.com/images/g/6bAAAOSw2EJcawoD/s-l225.webp" />
                     <div>
                         <h3 id="descLabel" className="labels">Riverdale T Shirt Women Snake Print Fashion Short Sleeve</h3>
                     <label className="labels">Condition</label>
                     <label id="productCndt">New with tags</label>
                     </div>
                 </div>
             </div>
             <div className="col-lg-4 col-sm-12 divs">
                <button type="button" class="btn btn-primary " id="check-out-btn">Go to Checkout</button>
             </div>
        </div>  
    </div>
 return (
     <div class="containr">
         <div class="tracking">
             <h1 class="title1">Track Your Order</h1>
             
            <form>
                 <div class="form-group textID">
                     <h3 class="title1">Enter your orderID</h3>
                    <input type="text" class="form-control " id="orderID" placeholder="Order ID"/>
                </div>
             </form>
              <button type="submit" class="btn btn-primary enterButton" href="./Form.js">Track</button>
         </div>
    </div>
    );
}


export default Content;