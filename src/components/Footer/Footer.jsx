import React from "react";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__ul">
          <li className="footer__item">Galaxy Holding LLC</li>
          <li className="footer__item">Copyright {new Date().getFullYear()}</li>
          <li className="footer__item">All Rights Reserved</li>
        </ul>
      </div>
    </footer>
  );
}
