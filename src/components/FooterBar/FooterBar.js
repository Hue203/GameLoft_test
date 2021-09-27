import React from "react";
import "./footerBar.css";
const FooterBar = () => {
  return (
    <div className="container-footer">
      <div className="row-top">
        <div className="footer-left">
          <div className="branch-logo">
            <a href="./home" class="brand">
              <img
                class="black"
                src="https://mkt-web.gameloft.com/assets/images/logo_gameloft_black.png"
                width="130"
                height="20"
                alt=""
                title=""
              />
            </a>
          </div>
          <div className="flow-us">
            {/* <i class="fab fa-facebook-square"></i>
            <i class="fab fa-linkedin"></i> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="260.941"
              height="52"
              viewBox="0 0 260.941 52"
            >
              <g
                id="Group_1107"
                data-name="Group 1107"
                transform="translate(0 -0.053)"
              >
                <path
                  id="facebook_1_"
                  data-name="facebook (1)"
                  d="M0,0V51.133H27.232V31.382H20.575V23.318h6.657V16.547A8.917,8.917,0,0,1,36.149,7.63h6.959V14.88h-4.98a2.834,2.834,0,0,0-2.834,2.834v5.6h7.688L41.92,31.382H35.295V51.133H51.133V0Z"
                  transform="translate(0 0.197)"
                  fill="#fff"
                />
                <g id="linkedin" transform="translate(69.942)">
                  <rect
                    id="Rectangle_1824"
                    data-name="Rectangle 1824"
                    width="52"
                    height="52"
                    transform="translate(0 0.053)"
                    fill="#fff"
                  />
                  <g
                    id="Group_718"
                    data-name="Group 718"
                    transform="translate(7.666 7.963)"
                  >
                    <path
                      id="Path_320"
                      data-name="Path 320"
                      d="M73.156,69.215a4.279,4.279,0,1,1-4.309,4.274A4.3,4.3,0,0,1,73.156,69.215Z"
                      transform="translate(-68.847 -69.215)"
                      fill="#2699fb"
                    />
                    <path
                      id="Path_321"
                      data-name="Path 321"
                      d="M80.4,198.435H75.38a1.179,1.179,0,0,1-1.179-1.179V175.85a1.179,1.179,0,0,1,1.179-1.179H80.4a1.179,1.179,0,0,1,1.179,1.179v21.406A1.179,1.179,0,0,1,80.4,198.435Z"
                      transform="translate(-73.6 -162.839)"
                      fill="#2699fb"
                    />
                    <path
                      id="Path_322"
                      data-name="Path 322"
                      d="M204.555,177.388a8.126,8.126,0,0,0-8.126-8.126h-1.287a7.228,7.228,0,0,0-6.324,3.732.55.55,0,0,0-.067-.008v-2.628a.49.49,0,0,0-.49-.49H182a.49.49,0,0,0-.49.49v22.785a.489.489,0,0,0,.489.49l6.4,0a.49.49,0,0,0,.49-.49V179.982a4.172,4.172,0,0,1,4.09-4.19,4.138,4.138,0,0,1,4.185,4.138v13.218a.49.49,0,0,0,.489.49l6.412,0a.489.489,0,0,0,.49-.49V177.388Z"
                      transform="translate(-168.871 -158.037)"
                      fill="#2699fb"
                    />
                  </g>
                </g>
                <g id="twitter" transform="translate(140.942)">
                  <rect
                    id="Rectangle_1825"
                    data-name="Rectangle 1825"
                    width="52"
                    height="52"
                    transform="translate(0 0.053)"
                    fill="#fff"
                  />
                  <path
                    id="Path_323"
                    data-name="Path 323"
                    d="M60.36,123.169a22.014,22.014,0,0,0,33.779-18.6q0-.455-.018-.905c.44-.346,3.159-2.526,3.826-3.927a17.854,17.854,0,0,1-4.37,1.134h-.014l.012-.007c.2-.133,2.984-2.028,3.361-4.287a26.816,26.816,0,0,1-3.749,1.563c-.362.12-.741.239-1.132.348a7.724,7.724,0,0,0-13.162,7.025A23.259,23.259,0,0,1,63.039,97.5s-3.692,5.04,2.2,10.222a7.936,7.936,0,0,1-3.336-.995,7.34,7.34,0,0,0,6.1,7.667,7.067,7.067,0,0,1-3.407.143,7.614,7.614,0,0,0,7.1,5.394,14.835,14.835,0,0,1-11.341,3.241Z"
                    transform="translate(-53.911 -85.069)"
                    fill="#2699fb"
                  />
                </g>
                <g id="youtube" transform="translate(208.942)">
                  <rect
                    id="Rectangle_1826"
                    data-name="Rectangle 1826"
                    width="52"
                    height="52"
                    transform="translate(0 0.053)"
                    fill="#fff"
                  />
                  <g
                    id="Group_719"
                    data-name="Group 719"
                    transform="translate(11.898 7.273)"
                  >
                    <path
                      id="Path_324"
                      data-name="Path 324"
                      d="M111.357,218.564a1.613,1.613,0,0,0-.128-.568.611.611,0,0,0-.55-.376.957.957,0,0,0-.751.282.5.5,0,0,0-.126.187l0,6.056v.149s.052.07.059.079a1.2,1.2,0,0,0,.641.394.62.62,0,0,0,.819-.49,1.469,1.469,0,0,0,.034-.305C111.362,222.168,111.366,220.366,111.357,218.564Zm0,0a1.613,1.613,0,0,0-.128-.568.611.611,0,0,0-.55-.376.957.957,0,0,0-.751.282.5.5,0,0,0-.126.187l0,6.056v.149s.052.07.059.079a1.2,1.2,0,0,0,.641.394.62.62,0,0,0,.819-.49,1.469,1.469,0,0,0,.034-.305C111.362,222.168,111.366,220.366,111.357,218.564Zm6.78-9.132q-10.749-.231-21.5,0a4.574,4.574,0,0,0-4.475,4.573V225.2a4.574,4.574,0,0,0,4.475,4.574q10.751.231,21.5,0a4.574,4.574,0,0,0,4.476-4.574V214.005A4.574,4.574,0,0,0,118.137,209.432Zm-19.4,16.786H96.672V214.535h-2.14V212.58h6.351v1.95H98.738Zm7.4-4.849v4.85H104.3v-1.109c-.066.071-.1.109-.138.148a3.357,3.357,0,0,1-1.41,1.011,1.712,1.712,0,0,1-.857.077,1.054,1.054,0,0,1-.829-.66,2.562,2.562,0,0,1-.19-1.056c0-1.335,0-8.4,0-8.47H102.7c0,.062.01,5.134.011,7.608a2.022,2.022,0,0,0,.028.4.446.446,0,0,0,.642.358,2,2,0,0,0,.884-.692.32.32,0,0,0,.035-.185v-7.5l1.831,0Zm6.962,3.881a1.5,1.5,0,0,1-1.557,1.1,2.067,2.067,0,0,1-1.561-.712l-.177-.189v.765h-1.833V212.579H109.8v4.489a1.842,1.842,0,0,1,.2-.313,2.105,2.105,0,0,1,1.056-.671,1.589,1.589,0,0,1,1.9.864,3.543,3.543,0,0,1,.292,1.532q.005,2.859,0,5.719A3.345,3.345,0,0,1,113.1,225.25Zm6.771-.384a2.242,2.242,0,0,1-1.937,1.588,3.064,3.064,0,0,1-1.748-.178,2.427,2.427,0,0,1-1.387-1.766,5.327,5.327,0,0,1-.134-1.139c-.015-1.493-.008-2.988,0-4.481a3.017,3.017,0,0,1,.723-2.1,2.668,2.668,0,0,1,2.283-.881,3.194,3.194,0,0,1,.8.145,2.22,2.22,0,0,1,1.512,1.8,5.411,5.411,0,0,1,.1,1.017c.015.8-.006,2.553-.006,2.553h-3.511v2.517a.817.817,0,1,0,1.635,0v-1.294h1.886A9.141,9.141,0,0,1,119.868,224.866Zm-1.675-6.42a.817.817,0,1,0-1.635,0v1.413h1.635Zm-6.964-.45a.611.611,0,0,0-.55-.376.957.957,0,0,0-.751.282.5.5,0,0,0-.126.187l0,6.055v.149s.052.07.059.079a1.2,1.2,0,0,0,.641.394.62.62,0,0,0,.819-.49,1.469,1.469,0,0,0,.034-.305c0-1.8.006-3.605,0-5.407A1.611,1.611,0,0,0,111.229,218Z"
                      transform="translate(-92.159 -192.908)"
                      fill="#2699fb"
                    />
                    <path
                      id="Path_325"
                      data-name="Path 325"
                      d="M262.025,94.99v10.125h-1.876l0-1.088c-.207.2-.385.4-.579.567a2.534,2.534,0,0,1-1.193.62,1.19,1.19,0,0,1-1.523-.811,2.673,2.673,0,0,1-.121-.756V94.99H258.6v7.722a1.749,1.749,0,0,0,.026.306.423.423,0,0,0,.6.362,2,2,0,0,0,.9-.693.334.334,0,0,0,.028-.189V94.99Z"
                      transform="translate(-238.269 -91.409)"
                      fill="#2699fb"
                    />
                    <path
                      id="Path_326"
                      data-name="Path 326"
                      d="M138.71,68.411c-.407-1.717-1.261-5.341-1.261-5.341h-2.135s1.64,5.44,2.374,7.866a.968.968,0,0,1,.038.275v5.563h1.969V71.211a.968.968,0,0,1,.038-.275c.734-2.426,2.374-7.866,2.374-7.866h-2.135s-.853,3.624-1.261,5.341Z"
                      transform="translate(-130.472 -63.07)"
                      fill="#2699fb"
                    />
                    <path
                      id="Path_327"
                      data-name="Path 327"
                      d="M197.495,92.731h0a2.687,2.687,0,0,0-2.687,2.687v5.258a2.687,2.687,0,0,0,2.687,2.687h0a2.687,2.687,0,0,0,2.687-2.687V95.418A2.686,2.686,0,0,0,197.495,92.731Zm.775,8.05a.775.775,0,1,1-1.55,0v-5.47a.775.775,0,1,1,1.55,0Z"
                      transform="translate(-183.291 -89.403)"
                      fill="#2699fb"
                    />
                  </g>
                </g>
              </g>
            </svg>
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
          <div className="visit-content">
            <h3>VISIT</h3>
            <p> Gameloft Games</p>
            <p>Gameloft Careers</p>
            <p>Gameloft News</p>
            <p>Gameloft Forum</p>
            <p>Gameloft Corporate</p>
            <p>Gameloft Corporate</p>
            <p>Gameloft Advertising</p>
            <p>Gameloft Support</p>
          </div>
          <div className="legal-content">
            <h3>LEGAL</h3>
            <p> Gameloft Games</p>
            <p>Gameloft Careers</p>
            <p>Gameloft News</p>
            <p>Gameloft Forum</p>
            <p>Gameloft Corporate</p>
            <p>Gameloft Corporate</p>
            <p>Gameloft Advertising</p>
            <p>Gameloft Support</p>
          </div>
        </div>
      </div>
      <div className="row-bottom">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum
        accusamus, modi voluptate quasi est perferendis minus quos placeat,
        mollitia quo deleniti doloremque hic ad, illo rem expedita maxime
        architecto!
      </div>
    </div>
  );
};

export default FooterBar;