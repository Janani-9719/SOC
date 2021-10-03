const  Tracking= () => {
 return (
   <div className="container ">
     <div className="trackingDIV">
       <div class="progress prograssDiv">
        <div class="progress-bar progressBar" role="progressbar"   aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
       </div>
       <div className="detailsDiv">
         <label className="labels">Order Details</label>
       </div>
    </div>
      
   </div>
 );
}
 
export default Tracking;