import React, { Component } from "react";

import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="footer-container">
          <p>Copyright &#169; 2023 AS</p>
        </div>

        <div class="footer-items">
          <a
            class="footer-item"
            target="_blank"
            href="https://www.linkedin.com/in/ayesha-siddiqa-6b46a2ab/"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            class="footer-item"
            target="_blank"
            href="https://github.com/ashisohail"
          >
            <i class="fa-brands fa-square-github"> </i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
