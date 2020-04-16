import React from "react";

import Navigation from "../Navigation/Navigation.jsx";
import Productcard from "./Productcard.jsx"
import Footer from "../Footer/Footer.jsx";
import Slider from "react-slick";
import slider1  from "../../assets/images/products/Capture.JPG";
import slider2  from "../../assets/images/products/Capture2.JPG";
import form2 from "../../assets/icons/2f.jpg";
 import form1 from "../../assets/icons/1f.jpg";
import form3 from "../../assets/icons/3f.jpg";





  

export default function productdetail() {
 var settings = {
          dots: false,
        
          infinite: true,
          speed: 500,
          slidesToShow: 3.,
          slidesToScroll: 1
        };
  return (
    <>
      <Navigation type="secondary" />
      {/* <SecondaryHeader backgroundImage={productdetail} /> */}
     <div class="bg-image-product">
        <div className="box"><i className="fa fa-shopping-cart"></i></div>
        {/* <span className="span-tool"><sup>2</sup></span> */}
     </div>
      <Productcard/>
 <div className="container-fluid coin">
   <div className="container">
       <div className="row">
           <div className="col-lg-4">
               <img src={form1} className="img-person"/>
               <h3>IMPROVE CIRCULATION</h3>
               <p className="para-product" >
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.


</p>
           </div>
           <div className="col-lg-4">
           <img src={form2} className="img-person"/>
           <h3>SPEED UP RECOVERY</h3>
           <p className="para-product">
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.


</p>
           </div>
           <div className="col-lg-4">
           <img src={form3} className="img-person"/>
           <h3>BOOST IMMUNITY

</h3>
<p className="para-product">
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.


</p>
           </div>
       </div>

   </div>
 </div>

      <div className="container">
          <div className="row">
              <div className="col-lg-4">

              </div>
              <div className="col-lg-6">
               <p className="para-second">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsaquae ab illo inventore veritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsaquae ab illo inventore veritatis et quasi architecto.</p>
               <p className="para-second">
               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsaquae ab illo inventore veritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ipsaquae ab illo inventore veritatis et quasi architecto.
               </p>
              </div>
              <label className="septator"></label>

          </div>
      </div>
      <div className="container">
<p className="para-customers">Customers who bought this item also tried the following:

</p>
      <Slider {...settings}>
        <div>
         <img src={slider1}/>
        </div>
        <div>
        <img src={slider2}/>
        </div>
        <div>
        <img src={slider1}/>
        </div>
        <div>
        <img src={slider2}/>
        </div>
        <div>
        <img src={slider1}/>
        </div>
        <div>
        <img src={slider2}/>
        </div>
      </Slider>
      </div>
      
      <Footer />
    </>
  );
}
