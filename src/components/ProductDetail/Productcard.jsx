import React from "react";

import images from "../../assets/images/products/product-1.png";




export default function Productcard() {
  return (
    <>
     <div className="container">
         <div className="row">
             <div className="col-lg-4">
                 <img src={images} className="imgproducts"/>
             </div>
             <div className="col-lg-6">
                 <h1 className="haed-product">Rocket Fuel</h1>
                 <p className="para-price"><label className="color-pink">$ 199</label> &nbsp;&nbsp; |&nbsp;&nbsp; ENERGIZING BLEND</p>

                 <div className="d-flex">
                   <input type="number" className="product-card__number-input" style={{marginTop:"10px", height:"40px",}}/>
                   <button className="add-bitton">ADD TO CART</button>
                 </div>
                 <p className="pa-pa-product">
                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsaquae ab illo inventore veritatis. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsaquae ab illo inventore veritatis.
                 </p>
             </div>
         </div>
     </div>
    </>
  );
}
