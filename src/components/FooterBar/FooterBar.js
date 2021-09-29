import React from "react";
import "./footerBar.css";
const FooterBar = () => {
  return (
    <footer>
      <div className="container-footer">
        <div className="row-top">
          <div className="footer-left">
            <div className="branch-logo">
              <a href="./home" class="brand">
                <img
                  class="black"
                  src="https://mkt-web.gameloft.com/assets/images/logo_gameloft_black.png"
                  width="130"
                  height="50"
                  alt="logoGame"
                />
              </a>
            </div>
            <div className="flow-us">
              <a href="https://www.facebook.com/">
                <img
                  src="https://www.nicepng.com/png/detail/825-8255248_follow-us-on-facebook-light-blue-facebook-icon.png"
                  alt="facebook"
                  width="100"
                  height="80"
                />
              </a>
              <a href="./">
                <img
                  src="https://www.seekpng.com/png/detail/8-84419_linkedin-logo-png-icon-linkedin-logo-png.png"
                  alt="linkedin"
                  width="100"
                  height="80"
                />
              </a>

              <a href="./">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                  alt="linkedin"
                  width="100"
                  height="80"
                />
              </a>
              <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLFvYD00eBc1EVC4MwRRdDmCvHumzm-vxEZyH6m5aig6ym41r8TIaInMM5inp_MYN15p4&usqp=CAU">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLFvYD00eBc1EVC4MwRRdDmCvHumzm-vxEZyH6m5aig6ym41r8TIaInMM5inp_MYN15p4&usqp=CAU"
                  alt="linkedin"
                  width="130"
                  height="80"
                />
              </a>
            </div>
            <div className="language">
              <form>
                <select id="language" name="language">
                  <option value="EN">English</option>
                  <option value="VN">Viet Nam</option>
                </select>
              </form>
            </div>
          </div>
          <div className="footerRight">
            <div class="f-t-links half fl">
              <ul>
                <ul>
                  <li>
                    <a href="/en/games">Gameloft Games</a>
                  </li>
                  <li>
                    <a href="https://www.gameloft.com/corporate/jobs/apply ">
                      Gameloft Careers
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gameloft.com/central">Gameloft News</a>
                  </li>
                  <li>
                    <a href="https://forum.gameloft.com/">Gameloft Forum</a>
                  </li>
                  <li>
                    <a href="https://www.gameloft.com/corporate/">
                      Gameloft Corporate
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gameloft.com/forbrands/">
                      Gameloft for brands{" "}
                    </a>
                  </li>
                  <li>
                    <a href="https://support.gameloft.com/?lang=en">
                      Gameloft Support
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gameloft.com/business-solutions/">
                      Business Solutions
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
            <div class="f-t-links half fl">
              <ul>
                <ul>
                  <li>
                    <a href="/en/conditions-of-use" target="_blank">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="/en/privacy-notice" target="_blank">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/en/legal/showcase-cookie-policy" target="_blank">
                      Cookies Policy
                    </a>
                  </li>
                  <li>
                    <a href="/en/eula" target="_blank">
                      EULA
                    </a>
                  </li>
                  <li>
                    <a href="/en/information/legal-notices">Legal Notices</a>
                  </li>
                  <li></li>
                  <li>
                    <a href="/en/information/event">Event Rules</a>
                  </li>
                  <li>
                    <a href="https://www.gameloft.com/en/contest-rules/">
                      Contest Rules
                    </a>
                  </li>
                  <li>
                    <a href="/en/business-contacts">Business Contacts</a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="auto">
            <div class="fo-bo-copyright bp-center">
              <p>
                ©2021 Gameloft. All rights reserved. Gameloft and the Gameloft
                logo are trademarks of Gameloft in the U.S. and/or other
                countries.
                <br />
                All other trademarks are the property of their respective
                owners.
              </p>

              <p>
                <a
                  href="./"
                  style={{ color: "inherit", textDecoration: "underline" }}
                >
                  Manage Your Cookie Choices
                </a>
              </p>
            </div>
            <div class="clr"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
