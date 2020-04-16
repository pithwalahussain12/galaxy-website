import React from "react";
import Product from "./Product/Product.jsx";
import MainButton from "../../MainButton/MainButton.jsx";

import "./Products.scss";
import backgroundImage1 from "../../../assets/images/products/product-1-background.png";
import product1 from "../../../assets/images/products/product-1.png";

export default function Products() {
  return (
    <section className="products row">
      <h2 className="products__title">Products</h2>
      <p className="products__paragraph">
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ab illo inventore.


      </p>
      <div className="container">
      <div className="products__container">
     
        {[null, null, null, null, null, null].map((el, i) => {
          return (
            <Product
           
              key={i}
              backgroundImage={backgroundImage1}
              productImage={product1}
              longDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum illo ad."
              slogan="STRENGTH BLEND"
            />
          );
        })}
        
      </div>
      </div>
      <MainButton type="secondary" text="VIEW PRODUCTS" />
    </section>
  );
}
