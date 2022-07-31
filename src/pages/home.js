import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>

        <>
          {/* start header */}
          <header id="top-bar" className="top-bar--light">
            <div id="top-bar__inner">
              <a id="top-bar__logo" className="site-logo" href="assets/index.html">
                <img
                  className="img-responsive"
                  width={175}
                  height={42}
                  src="assets/img/site_logo.png"
                  alt="demo"
                />
                <img
                  className="img-responsive"
                  width={175}
                  height={42}
                  src="assets/img/site_logo_2.png"
                  alt="demo"
                />
              </a>
              <a id="top-bar__navigation-toggler" href="assets/javascript:void(0);">
                <span />
              </a>
              <div id="top-bar__navigation-wrap">
                <div>
                  <nav
                    id="top-bar__navigation"
                    className="navigation"
                    role="navigation"
                  >
                    <ul>
                      <li className="active">
                        <a href="assets/javascript:void(0);">
                          <span>Home</span>
                        </a>
                        <div className="submenu">
                          <ul>
                            <li>
                              <a href="assets/index.html">Home Page</a>
                            </li>
                            <li>
                              <a href="assets/index_6.html">Home Slider</a>
                            </li>
                            <li>
                              <a href="assets/index_9.html">Agency</a>
                            </li>
                            <li>
                              <a href="assets/index_7.html">Landing Wallet</a>
                            </li>
                            <li>
                              <a href="assets/index_4.html">Landing ICO 1</a>
                            </li>
                            <li>
                              <a href="assets/index_3.html">Landing ICO 2</a>
                            </li>
                            <li>
                              <a href="assets/index_2.html">Landing ICO 3</a>
                            </li>
                            <li>
                              <a href="assets/index_5.html">Landing ICO 5</a>
                            </li>
                            <li className="active">
                              <a href="assets/index_8.html">Mining Farm</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="assets/javascript:void(0);">
                          <span>Pages</span>
                        </a>
                        <div className="submenu">
                          <ul>
                            <li>
                              <a href="assets/about.html">About</a>
                            </li>
                            <li>
                              <a href="assets/services.html">Services</a>
                            </li>
                            <li>
                              <a href="assets/blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="assets/blog_massonry.html">Blog Massonry</a>
                            </li>
                            <li>
                              <a href="assets/blog_details.html">Blog Post</a>
                            </li>
                            <li>
                              <a href="assets/pricing_table.html">Pricinag Tables</a>
                            </li>
                            <li>
                              <a href="assets/typography.html">Typography</a>
                            </li>
                            <li>
                              <a href="assets/404.html">404 page</a>
                            </li>
                            <li>
                              <a href="assets/widgets.html">Widgets</a>
                            </li>
                            <li>
                              <a href="assets/contacts.html">Contact</a>
                            </li>
                            <li>
                              <a href="assets/sign_in.html">Sign In</a>
                            </li>
                            <li>
                              <a href="assets/sign_up.html">Sign Up</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="assets/white_pappers.pdf" target="_blank">
                          <span>White Pappers</span>
                        </a>
                      </li>
                      <li>
                        <a href="assets/faq.html">
                          <span>FAQ’s</span>
                        </a>
                      </li>
                      <li>
                        <a href="assets/support.html">
                          <span>Support</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <br className="hide--lg" />
                  <ul id="top-bar__subnavigation">
                    <li>
                      <a
                        className="custom-btn custom-btn--small custom-btn--style-3"
                        href="assets/sign_in.html"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="assets/sign_up.html">Sign up</a>
                    </li>
                    <li>
                      <div id="top-bar__choose-lang">
                        <div className="list-wrap">
                          <ul className="list">
                            <li>
                              <img
                                className="img-responsive  circled"
                                src="assets/img/ico/flag/2.png"
                                width={25}
                                height={25}
                                alt="demo"
                              />
                            </li>
                            <li>
                              <img
                                className="img-responsive  circled"
                                src="assets/img/ico/flag/3.png"
                                width={25}
                                height={25}
                                alt="demo"
                              />
                            </li>
                            <li>
                              <img
                                className="img-responsive  circled"
                                src="assets/img/ico/flag/4.png"
                                width={25}
                                height={25}
                                alt="demo"
                              />
                            </li>
                          </ul>
                        </div>
                        <i>
                          <img
                            className="img--active img-responsive  circled"
                            src="assets/img/ico/flag/1.png"
                            width={25}
                            height={25}
                            alt="demo"
                          />
                        </i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          {/* end header */}
          {/* start start screen */}
          <div id="start-screen" className="start-screen--light start-screen--style-8">
            <div
              className="start-screen__static-bg"
              style={{
                backgroundImage: "url(assets/img/bg_18.png)",
                backgroundPosition: "center bottom"
              }}
            >
              <div className="start-screen__content">
                <div className="start-screen__content__inner">
                  <div className="grid grid--container">
                    <div className="row row--xs-center">
                      <div className="col col--md-7">
                        <h1 className="__title">Mining Cryptofarm</h1>
                        <div className="row  col-MB-40">
                          <div className="col col--lg-11 col--xl-9">
                            <div className="col-MB-25">
                              Crypterium is the world’s most popular away to buy and
                              sell bitcoin, ethereum, and litecoin
                            </div>
                            <div className="row row--xs-center">
                              <div className="col col--xs-auto">
                                <a
                                  className="custom-btn custom-btn--medium custom-btn--style-5"
                                  style={{ marginTop: 20 }}
                                  href="assets/#"
                                >
                                  Start Mining
                                </a>
                              </div>
                              <div className="col col--xs-auto">
                                <a
                                  className="btn-play"
                                  data-fancybox=""
                                  href="assets/http://player.vimeo.com/video/44309170"
                                  style={{ marginTop: 20 }}
                                >
                                  <i />
                                  Video Presentation
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="facts">
                          <div className="__inner">
                            <div className="row">
                              <div className="col col--xs-auto col--lg-4">
                                <div className="__item text--sm-left">
                                  <span
                                    className="num js-count animate"
                                    data-from={0}
                                    data-to={20}
                                    data-decimals={1}
                                    data-before="$20.0"

                                    data-after="M"
                                  /><span />
                                  <br /> Mined by Crypterium
                                </div>
                              </div>
                              <div className="col col--xs-auto col--lg-4">
                                <div className="__item text--sm-left">
                                  <span
                                    className="num js-count animate"
                                    data-from={0}
                                    data-to={25}
                                    data-decimals={3}
                                    data-before="25.000"
                                  />
                                  <br /> Used people
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end start screen */}
          {/* start main */}
          <main role="main">
            {/* start section */}
            <section className="section">
              <div className="grid grid--container">
                <div className="row">
                  <div className="col col--md-5 col--lg-4">
                    <div data-aos="fade-right" className="aos-init aos-animate">
                      <div className="section-heading  col-MB-40">
                        <h5 className="__subtitle">About minig Farm</h5>
                        <h2 className="__title">Crypterium Biggest Mining Farm</h2>
                      </div>
                      <a
                        className="btn-play--big"
                        data-fancybox href="assets/http://player.vimeo.com/video/44309170"
                      />
                    </div>
                  </div>
                  <div className="col hide--md col-MB-10" />
                  <div className="col col--md-7 col--lg-8">
                    <p data-aos="fade-up" className="aos-init aos-animate">
                      Steelhead trumpeter, zingel saury{" "}
                      <a href="#">grouper swallower</a> threadfin pencilsmelt pufferfish
                      hoki. Unicorn fish salmon shark: elasmobranch rohu wasp fish;
                      yellowfin surgeonfish.
                    </p>
                    <p data-aos="fade-up" className="aos-init aos-animate">
                      Halfbeak, "tiger shark long-finned char gar yellowfin tuna blue
                      whiting, cavefish Redfish murray cod." Squirrelfish lungfish
                      gudgeon Sevan trout luminous hake bleak bocaccio glassfish gulf
                      menhaden. Chum salmon mooneye pleco bango blue-redstripe danio.
                    </p>
                    <p data-aos="fade-up" className="aos-init aos-animate">
                      Driftwood catfish lemon shark arowana; wormfish sailfish sand dab!
                      Torpedo rockfish Black swallower snailfish candlefish Kafue pike
                      sillago eel Pacific lamprey; king-of-the-salmon slipmouth,
                      javelin, "trahira," cavefish. JavaScript is also used in
                      environments that aren’t web-based, such as PDF documents
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* end section */}
            {/* start section */}
            <section className="section section--no-pt">
              <div className="grid grid--container">
                <div className="section-heading section-heading--center  col-MB-60">
                  <h5 className="__subtitle">Pricing plans</h5>
                  <h2 className="__title">
                    Crypto Mining Farm <br />
                    Pricing Plans
                  </h2>
                </div>
                <div className="pricing-tab">
                  <div className="tab-container">
                    <nav className="tab-nav  text--center">
                      <a href="assets/javascript:void(0);">
                        <img
                          className="lazy error"
                          width={25}
                          height={25}
                          src="assets/https://placeholdit.imgix.net/~text?txtsize=21txt=Image%20not%20loadw=200h=200"
                          data-src="assets/img/ico/ico_btc2.png"
                          alt="demo"
                        />
                        <strong>Bitcoin</strong>
                      </a>
                      <a href="assets/javascript:void(0);">
                        <img
                          className="lazy error"
                          width={25}
                          height={25}
                          src="assets/img/blank.gif"
                          data-src="assets/img/ico/ico_monero.png"
                          alt="demo"
                        />
                        <strong>Monero</strong>
                      </a>
                      <a href="assets/javascript:void(0);">
                        <img
                          className="lazy error"
                          width={25}
                          height={25}
                          src="assets/img/blank.gif"
                          data-src="assets/img/ico/ico_ripple.png"
                          alt="demo"
                        />
                        <strong>Ripple</strong>
                      </a>
                    </nav>
                    <div className="tab-content">
                      <div className="tab-content__item">
                        {/* start pricing table */}
                        <div className="pricing-table pricing-table--style-4">
                          <div className="__inner">
                            <div className="row">
                              {/* start item */}
                              <div className="col col--sm-6 col--lg-3 col--sm-flex">
                                <div
                                  className="__item __item--color-1"
                                  data-aos="flip-left"
                                  data-aos-easing="ease-out-cubic"
                                  data-aos-delay={150}
                                >
                                  <div>
                                    <h4 className="__title">Basic</h4>
                                    <p className="__price">Free</p>
                                  </div>
                                  <ul className="__desc-list">
                                    <li>
                                      <strong>0.5 KH/s</strong> <br />
                                      <span className="__note">Free setup</span>
                                    </li>
                                    <li>
                                      Maintenance Fees per GH/s/day <br />
                                      <strong>$ 0.299</strong>
                                    </li>
                                    <li>
                                      Contract Duration <br />
                                      <strong>24 Months</strong>
                                    </li>
                                  </ul>
                                  <a
                                    className="custom-btn custom-btn--medium custom-btn--style-2 wide"
                                    href="assets/#"
                                  >
                                    Get Started
                                  </a>
                                </div>
                              </div>
                              {/* end item */}
                              {/* start item */}
                              <div className="col col--sm-6 col--lg-3 col--sm-flex">
                                <div
                                  className="__item __item--color-2"
                                  data-aos="flip-left"
                                  data-aos-easing="ease-out-cubic"
                                  data-aos-delay={300}
                                >
                                  <div>
                                    <h4 className="__title">Standart</h4>
                                    <p className="__price">
                                      9.99$<sub>/mo</sub>
                                    </p>
                                  </div>
                                  <ul className="__desc-list">
                                    <li>
                                      <strong>0.5 KH/s</strong> <br />
                                      <span className="__note">Free setup</span>
                                    </li>
                                    <li>
                                      Maintenance Fees per GH/s/day <br />
                                      <strong>$ 0.299</strong>
                                    </li>
                                    <li>
                                      Contract Duration <br />
                                      <strong>24 Months</strong>
                                    </li>
                                  </ul>
                                  <a
                                    className="custom-btn custom-btn--medium custom-btn--style-2 wide"
                                    href="assets/#"
                                  >
                                    Get Started
                                  </a>
                                </div>
                              </div>
                              {/* end item */}
                              {/* start item */}
                              <div className="col col--sm-6 col--lg-3 col--sm-flex">
                                <div
                                  className="__item __item--color-3 __item--active"
                                  data-aos="flip-left"
                                  data-aos-easing="ease-out-cubic"
                                  data-aos-delay={450}
                                >
                                  <span className="__label">Best match</span>
                                  <div>
                                    <h4 className="__title">Optima</h4>
                                    <p className="__price">
                                      29.99$<sub>/mo</sub>
                                    </p>
                                  </div>
                                  <ul className="__desc-list">
                                    <li>
                                      <strong>0.5 KH/s</strong> <br />
                                      <span className="__note">Free setup</span>
                                    </li>
                                    <li>
                                      Maintenance Fees per GH/s/day <br />
                                      <strong>$ 0.299</strong>
                                    </li>
                                    <li>
                                      Contract Duration <br />
                                      <strong>24 Months</strong>
                                    </li>
                                  </ul>
                                  <a
                                    className="custom-btn custom-btn--medium custom-btn--style-2 wide"
                                    href="assets/#"
                                  >
                                    Get Started
                                  </a>
                                </div>
                              </div>
                              {/* end item */}
                              {/* start item */}
                              <div className="col col--sm-6 col--lg-3 col--sm-flex">
                                <div
                                  className="__item __item--color-4"
                                  data-aos="flip-left" 
                                  data-aos-easing="ease-out-cubic"
                                  data-aos-delay={600}
                                >
                                  <div>
                                    <h4 className="__title">Premium</h4>
                                    <p className="__price">
                                      199.99$<sub>/mo</sub>
                                    </p>
                                  </div>
                                  <ul className="__desc-list">
                                    <li>
                                      <strong>0.5 KH/s</strong> <br />
                                      <span className="__note">Free setup</span>
                                    </li>
                                    <li>
                                      Maintenance Fees per GH/s/day <br />
                                      <strong>$ 0.299</strong>
                                    </li>
                                    <li>
                                      Contract Duration <br />
                                      <strong>24 Months</strong>
                                    </li>
                                  </ul>
                                  <a
                                    className="custom-btn custom-btn--medium custom-btn--style-2 wide"
                                    href="assets/#"
                                  >
                                    Get Started
                                  </a>
                                </div>
                              </div>
                              {/* end item */}
                            </div>
                          </div>
                        </div>
                        {/* end pricing table */}
                      </div>
                      <div className="tab-content__item">
                        {/* start pricing table */}
                        <div className="pricing-table pricing-table--style-4">
                          <div className="__inner">
                            <div className="row">
                              {/* start item */}
                              <div className="col col--sm-6 col--lg-3 col--sm-flex">
                                <div
                                  className="__item __item--color-2"
                                  data-aos="flip-left"
                                  data-aos-easing="ease-out-cubic"
                                  data-aos-delay={300}
                                >
                                  <div>
                                    <h4 className="__title">Standart</h4>
                                    <p className="__price">
                                      9.99$<sub>/mo</sub>
                                    </p>
                                  </div>
                                  <ul className="__desc-list">
                                    <li>
                                      <strong>0.5 KH/s</strong> <br />
                                      <span className="__note">Free setup</span>
                                    </li>
                                    <li>
                                      Maintenance Fees per GH/s/day <br />
                                      <strong>$ 0.299</strong>
                                    </li>
                                    <li>
                                      Contract Duration <br />
                                      <strong>24 Months</strong>
                                    </li>
                                  </ul>
                                  <a
                                    className="custom-btn custom-btn--medium custom-btn--style-2 wide"
                                    href="assets/#"
                                  >
                                    Get Started
                                  </a>
                                </div>
                              </div>
                              {/* end item */}
                              {/* start item */}
                              <div className="col col--sm-6 col--lg-3 col--sm-flex">
                                <div
                                  className="__item __item--color-3 __item--active"
                                  data-aos="flip-left"
                                  data-aos-easing="ease-out-cubic"
                                  data-aos-delay={450}
                                >
                                  <span className="__label">Best match</span>
                                  <div>
                                    <h4 className="__title">Optima</h4>
                                    <p className="__price">
                                      29.99$<sub>/mo</sub>
                                    </p>
                                  </div>
                                  <ul className="__desc-list">
                                    <li>
                                      <strong>0.5 KH/s</strong> <br />
                                      <span className="__note">Free setup</span>
                                    </li>
                                    <li>
                                      Maintenance Fees per GH/s/day <br />
                                      <strong>$ 0.299</strong>
                                    </li>
                                    <li>
                                      Contract Duration <br />
                                      <strong>24 Months</strong>
                                    </li>
                                  </ul>
                                  <a
                                    className="custom-btn custom-btn--medium custom-btn--style-2 wide"
                                    href="assets/#"
                                  >
                                    Get Started
                                  </a>
                                </div>
                              </div>
                              {/* end item */}
                              {/* start item */}
                              <div className="col col--sm-6 col--lg-3 col--sm-flex">
                                <div
                                  className="__item __item--color-4"
                                  data-aos="flip-left"
                                  data-aos-easing="ease-out-cubic"
                                  data-aos-delay={600}
                                >
                                  <div>
                                    <h4 className="__title">Premium</h4>
                                    <p className="__price">
                                      199.99$<sub>/mo</sub>
                                    </p>
                                  </div>
                                  <ul className="__desc-list">
                                    <li>
                                      <strong>0.5 KH/s</strong> <br />
                                      <span className="__note">Free setup</span>
                                    </li>
                                    <li>
                                      Maintenance Fees per GH/s/day <br />
                                      <strong>$ 0.299</strong>
                                    </li>
                                    <li>
                                      Contract Duration <br />
                                      <strong>24 Months</strong>
                                    </li>
                                  </ul>
                                  <a
                                    className="custom-btn custom-btn--medium custom-btn--style-2 wide"
                                    href="assets/#"
                                  >
                                    Get Started
                                  </a>
                                </div>
                              </div>
                              {/* end item */}
                              {/* start item */}
                              <div className="col col--sm-6 col--lg-3 col--sm-flex">
                                <div
                                  className="__item __item--color-1"
                                  data-aos="flip-left"
                                  data-aos-easing="ease-out-cubic"
                                  data-aos-delay={150}
                                >
                                  <div>
                                    <h4 className="__title">Basic</h4>
                                    <p className="__price">Free</p>
                                  </div>
                                  <ul className="__desc-list">
                                    <li>
                                      <strong>0.5 KH/s</strong> <br />
                                      <span className="__note">Free setup</span>
                                    </li>
                                    <li>
                                      Maintenance Fees per GH/s/day <br />
                                      <strong>$ 0.299</strong>
                                    </li>
                                    <li>
                                      Contract Duration <br />
                                      <strong>24 Months</strong>
                                    </li>
                                  </ul>
                                  <a
                                    className="custom-btn custom-btn--medium custom-btn--style-2 wide"
                                    href="assets/#"
                                  >
                                    Get Started
                                  </a>
                                </div>
                              </div>
                              {/* end item */}
                            </div>
                          </div>
                        </div>
                        {/* end pricing table */}
                      </div>
                      <div className="tab-content__item">
                        {/* start pricing table */}
                        <div className="pricing-table pricing-table--style-4">
                          <div className="__inner">
                            <div className="row">
                              {/* start item */}
                              <div className="col col--sm-6 col--lg-3 col--sm-flex">
                                <div
                                  className="__item __item--color-3 __item--active"
                                  data-aos="flip-left"
                                  data-aos-easing="ease-out-cubic"
                                  data-aos-delay={450}
                                >
                                  <span className="__label">Best match</span>
                                  <div>
                                    <h4 className="__title">Optima</h4>
                                    <p className="__price">
                                      29.99$<sub>/mo</sub>
                                    </p>
                                  </div>
                                  <ul className="__desc-list">
                                    <li>
                                      <strong>0.5 KH/s</strong> <br />
                                      <span className="__note">Free setup</span>
                                    </li>
                                    <li>
                                      Maintenance Fees per GH/s/day <br />
                                      <strong>$ 0.299</strong>
                                    </li>
                                    <li>
                                      Contract Duration <br />
                                      <strong>24 Months</strong>
                                    </li>
                                  </ul>
                                  <a
                                    className="custom-btn custom-btn--medium custom-btn--style-2 wide"
                                    href="assets/#"
                                  >
                                    Get Started
                                  </a>
                                </div>
                              </div>
                              {/* end item */}
                              {/* start item */}
                              <div className="col col--sm-6 col--lg-3 col--sm-flex">
                                <div
                                  className="__item __item--color-4"
                                  data-aos="flip-left"
                                  data-aos-easing="ease-out-cubic"
                                  data-aos-delay={600}
                                >
                                  <div>
                                    <h4 className="__title">Premium</h4>
                                    <p className="__price">
                                      199.99$<sub>/mo</sub>
                                    </p>
                                  </div>
                                  <ul className="__desc-list">
                                    <li>
                                      <strong>0.5 KH/s</strong> <br />
                                      <span className="__note">Free setup</span>
                                    </li>
                                    <li>
                                      Maintenance Fees per GH/s/day <br />
                                      <strong>$ 0.299</strong>
                                    </li>
                                    <li>
                                      Contract Duration <br />
                                      <strong>24 Months</strong>
                                    </li>
                                  </ul>
                                  <a
                                    className="custom-btn custom-btn--medium custom-btn--style-2 wide"
                                    href="assets/#"
                                  >
                                    Get Started
                                  </a>
                                </div>
                              </div>
                              {/* end item */}
                              {/* start item */}
                              <div className="col col--sm-6 col--lg-3 col--sm-flex">
                                <div
                                  className="__item __item--color-1"
                                  data-aos="flip-left"
                                  data-aos-easing="ease-out-cubic"
                                  data-aos-delay={150}
                                >
                                  <div>
                                    <h4 className="__title">Basic</h4>
                                    <p className="__price">Free</p>
                                  </div>
                                  <ul className="__desc-list">
                                    <li>
                                      <strong>0.5 KH/s</strong> <br />
                                      <span className="__note">Free setup</span>
                                    </li>
                                    <li>
                                      Maintenance Fees per GH/s/day <br />
                                      <strong>$ 0.299</strong>
                                    </li>
                                    <li>
                                      Contract Duration <br />
                                      <strong>24 Months</strong>
                                    </li>
                                  </ul>
                                  <a
                                    className="custom-btn custom-btn--medium custom-btn--style-2 wide"
                                    href="assets/#"
                                  >
                                    Get Started
                                  </a>
                                </div>
                              </div>
                              {/* end item */}
                              {/* start item */}
                              <div className="col col--sm-6 col--lg-3 col--sm-flex">
                                <div
                                  className="__item __item--color-2"
                                  data-aos="flip-left"
                                  data-aos-easing="ease-out-cubic"
                                  data-aos-delay={300}
                                >
                                  <div>
                                    <h4 className="__title">Standart</h4>
                                    <p className="__price">
                                      9.99$<sub>/mo</sub>
                                    </p>
                                  </div>
                                  <ul className="__desc-list">
                                    <li>
                                      <strong>0.5 KH/s</strong> <br />
                                      <span className="__note">Free setup</span>
                                    </li>
                                    <li>
                                      Maintenance Fees per GH/s/day <br />
                                      <strong>$ 0.299</strong>
                                    </li>
                                    <li>
                                      Contract Duration <br />
                                      <strong>24 Months</strong>
                                    </li>
                                  </ul>
                                  <a
                                    className="custom-btn custom-btn--medium custom-btn--style-2 wide"
                                    href="assets/#"
                                  >
                                    Get Started
                                  </a>
                                </div>
                              </div>
                              {/* end item */}
                            </div>
                          </div>
                        </div>
                        {/* end pricing table */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end section */}
            {/* start section */}
            <section className="section section--light-blue-bg  banner">
              <div className="grid grid--container">
                <div className="row row--xs-center">
                  <div className="col col--md-9 col--lg-6">
                    <div data-aos="fade-right" data-aos-offset={0} className="aos-init aos-animate">
                      <div className="section-heading  col-MB-30">
                        <h5 className="__subtitle">Equipment</h5>
                        <h2 className="__title">
                          Upon purchase of TI-miner (Top) GPU 4 Radeon RX 470
                        </h2>
                      </div>
                      <div className="content-container">
                        <ul>
                          <li>6 months of free allocation in data center;</li>
                          <li>6 months of warranty service;</li>
                          <li>6 months of 24/7 technical support;</li>
                          <li>6 months without no expenses on electricity</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col col-MB-40 col-lg-MB-0" />
                  <div className="col">
                    <div className="img-place">
                      <div className="hide--lg">
                        <img
                          className="img-responsive center-block  lazy"
                          src="assets/img/blank.gif"
                          data-src="assets/img/video_card_small.png"
                          alt="demo"
                        />
                      </div>
                      <span className="price">150$</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end section */}
            {/* start section */}
            <section className="section">
              <div className="grid grid--container">
                <div className="row row--md-center">
                  <div className="col col--md-5 col--lg-6">
                    <img className="img-responsive" src="assets/img/img_10.png" alt="demo" />
                  </div>
                  <div className="col hide--md col-MB-40" />
                  <div className="col col--md-7 col--lg-6">
                    <div data-aos="fade-left" data-aos-delay={150} className="aos-init aos-animate">
                      <div className="section-heading  col-MB-30">
                        <h5 className="__subtitle">Our mission</h5>
                        <h2 className="__title">
                          Start Bitcoin Miningwith Three Simple Steps
                        </h2>
                      </div>
                      <p className="col-MB-35">
                        JavaScript is also used in environments that aren’t web-based,
                        such as PDF documents, site-specific browsers, and desktop
                        widgets.
                      </p>
                      <ul className="special-list">
                        <li className="list__item list__item--1">
                          <div className="b-table">
                            <div className="cell v-middle">
                              <i className="ico fontello-lock" />
                            </div>
                            <div className="cell v-middle">
                              <h6>Register Account</h6>
                            </div>
                          </div>
                        </li>
                        <li className="list__item list__item--2">
                          <div className="b-table">
                            <div className="cell v-middle">
                              <i className="ico fontello-plane" />
                            </div>
                            <div className="cell v-middle">
                              <h6>Choose your plan</h6>
                            </div>
                          </div>
                        </li>
                        <li className="list__item list__item--3">
                          <div className="b-table">
                            <div className="cell v-middle">
                              <i className="ico fontello-wallet" />
                            </div>
                            <div className="cell v-middle">
                              <h6>Receive Currency</h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col col-MB-25">&nbsp;</div>
                <div className="col col-MB-25">&nbsp;</div>
                <div className="row row--md-center row--md-reverse">
                  <div className="col col--md-5 col--lg-6">
                    <img className="img-responsive" src="assets/img/img_11.png" alt="demo" />
                  </div>
                  <div className="col hide--md col-MB-40" />
                  <div className="col col--md-7 col--lg-6">
                    <div
                      className="content-grid"
                      style={{ marginLeft: "auto", maxWidth: 570 }}
                    >
                      <div data-aos="fade-right" className="aos-init aos-animate" data-aos-delay={150}>
                        <div className="section-heading  col-MB-30">
                          <h2 className="__title">
                            Power &amp; Modern Mining Equipment
                          </h2>
                        </div>
                        <p className="col-MB-35">
                          JavaScript is a prototype-based scripting language with
                          dynamic typing and first-class functions. This mix of features
                          makes it a multi-paradigm language, supporting
                          object-oriented, imperative, and functional programming
                          styles.
                        </p>
                        <p>
                          <a
                            className="custom-btn custom-btn--medium custom-btn--style-1"
                            href="assets/#"
                          >
                            Discover
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end section */}
            {/* start section */}
            <section className="section section--dark-bg section--custom-01">
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                @media only screen and (min-width: 768px) {\n                    .section--custom-01 .feature--style-1 {\n                        width: 65vw;\n                    }\n                    .section--custom-01 .feature--style-1 .slick-dots {\n                        text-align: left;\n                    }\n                }\n\n                @media only screen and (min-width: 992px) {\n                    .section--custom-01 .feature--style-1 {\n                        margin-left: 0 !important;\n                        margin-right: 0 !important;\n                    }\n                }\n            "
                }}
              />
              <div className="grid grid--container">
                <div className="row row--xs-center">
                  <div className="col col--md-6 col--lg-5 col--xl-4">
                    <div
                      className="col-MB-35 col-md-MB-0 aos-init aos-animate"
                      data-aos="fade-up" 
                      data-aos-easing="ease-out-cubic"
                    >
                      <div className="section-heading section-heading--white  col-MB-30">
                        <h5 className="__subtitle">Crypterium Strong size</h5>
                        <h2 className="__title">Why choose Crypto Mining Farm?</h2>
                      </div>
                      <p>
                        It is also used in server-side network programming with runtime
                        environments such as Node.js, game development and the creation
                        of desktop and mobile applications.
                      </p>
                    </div>
                  </div>
                  <div className="col col--md-6 col--lg-7 col--xl-7 col--xl-offset-1">
                    {/* start feature */}
                    <div
                      className="feature feature--style-1 feature--slider  text--center text--sm-left"
                      data-slick='{
								"autoplay": true,
								"arrows": false,
								"dots": true,
								"speed": 1000,
								"responsive": [
									{
										"breakpoint":560,
										"settings":{
											"centerMode": true,
											"centerPadding": "20%"
										}
									},
									{
										"breakpoint":767,
										"settings":{
											"centerMode": false,
											"slidesToShow": 2
										}
									},
									{
										"breakpoint":1500,
										"settings":{
											"slidesToShow": 3
										}
									}
								]}'
                    >
                      {/* start item */}
                      <div className="__item  __item--first">
                        <div className="__content">
                          <i className="__ico">
                            <img
                              className="img-responsive"
                              src="assets/img/feature_img/1.png"
                              width={34}
                              height={60}
                              alt="demo"
                            />
                          </i>
                          <h3 className="__title">Mobile App</h3>
                          <p>
                            {" "}
                            Our popular wallet works on your Android or iPhone in
                            addition to your web browser.
                          </p>
                        </div>
                      </div>
                      {/* end item */}
                      {/* start item */}
                      <div className="__item  __item--second">
                        <div className="__content">
                          <i className="__ico">
                            <img
                              className="img-responsive"
                              src="assets/img/feature_img/2.png"
                              width={46}
                              height={60}
                              alt="demo"
                            />
                          </i>
                          <h3 className="__title">Protection</h3>
                          <p>
                            Digital currency stored on our servers is covered by our
                            insurance policy.
                          </p>
                        </div>
                      </div>
                      {/* end item */}
                      {/* start item */}
                      <div className="__item  __item--third">
                        <div className="__content">
                          <i className="__ico">
                            <img
                              className="img-responsive"
                              src="assets/img/feature_img/3.png"
                              width={46}
                              height={60}
                              alt="demo"
                            />
                          </i>
                          <h3 className="__title">Secure Storage</h3>
                          <p>
                            We store the vast majority of the digital assets in secure
                            offline storage.
                          </p>
                        </div>
                      </div>
                      {/* end item */}
                      {/* start item */}
                      <div className="__item  __item--first">
                        <div className="__content">
                          <i className="__ico">
                            <img
                              className="img-responsive"
                              src="assets/img/feature_img/1.png"
                              width={34}
                              height={60}
                              alt="demo"
                            />
                          </i>
                          <h3 className="__title">Mobile App</h3>
                          <p>
                            {" "}
                            Our popular wallet works on your Android or iPhone in
                            addition to your web browser.
                          </p>
                        </div>
                      </div>
                      {/* end item */}
                      {/* start item */}
                      <div className="__item  __item--second">
                        <div className="__content">
                          <i className="__ico">
                            <img
                              className="img-responsive"
                              src="assets/img/feature_img/2.png"
                              width={46}
                              height={60}
                              alt="demo"
                            />
                          </i>
                          <h3 className="__title">Protection</h3>
                          <p>
                            Digital currency stored on our servers is covered by our
                            insurance policy.
                          </p>
                        </div>
                      </div>
                      {/* end item */}
                      {/* start item */}
                      <div className="__item  __item--third">
                        <div className="__content">
                          <i className="__ico">
                            <img
                              className="img-responsive"
                              src="assets/img/feature_img/3.png"
                              width={46}
                              height={60}
                              alt="demo"
                            />
                          </i>
                          <h3 className="__title">Secure Storage</h3>
                          <p>
                            We store the vast majority of the digital assets in secure
                            offline storage.
                          </p>
                        </div>
                      </div>
                      {/* end item */}
                    </div>
                    {/* end feature */}
                  </div>
                </div>
              </div>
            </section>
            {/* end section */}
            {/* start section */}
            <section className="section">
              <div className="grid grid--container">
                <div className="section-heading section-heading--center  col-MB-60">
                  <h5 className="__subtitle">MEET THE PRODUCT</h5>
                  <h2 className="__title">Advantages</h2>
                </div>
                {/* start feature */}
                <div className="feature feature--style-2  text--center">
                  <div className="__inner">
                    <div className="row">
                      {/* start item */}
                      <div className="col col--sm-6 col--lg-4">
                        <div
                          className="__item aos-init aos-animate"
                          data-aos="fade"
                          data-aos-delay={100}
                          data-aos-offset={100}
                        >
                          <div className="__content">
                            <i className="__ico">
                              <img
                                className="img-responsive lazy"
                                src="assets/img/blank.gif"
                                data-src="img/feature_img/7_1.png"
                                width={55}
                                height={55}
                                alt="demo"
                              />
                            </i>
                            <h3 className="__title">Mining farms construction</h3>
                            <p>
                              Hoki lamprey Japanese eel; loach catfish deep sea bonefish
                              long-finned pike finback cat shark gunnel. Shiner eel cod
                              striped bass
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end item */}
                      {/* start item */}
                      <div className="col col--sm-6 col--lg-4">
                        <div
                          className="__item aos-init aos-animate"
                          data-aos="fade"
                          data-aos-delay={150}
                          data-aos-offset={100}
                        >
                          <div className="__content">
                            <i className="__ico">
                              <img
                                className="img-responsive lazy"
                                src="assets/img/blank.gif"
                                data-src="img/feature_img/2_1.png"
                                width={46}
                                height={60}
                                alt="demo"
                              />
                            </i>
                            <h3 className="__title">Warranty from 1 to 5 years</h3>
                            <p>
                              Jack California flyingfish Devario walleye french
                              angelfish red snapper; ghoul: sea raven. Barreleye
                              slipmouth yellowfin grouper{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end item */}
                      {/* start item */}
                      <div className="col col--sm-6 col--lg-4">
                        <div
                          className="__item aos-init aos-animate"
                          data-aos="fade"
                          data-aos-delay={200}
                          data-aos-offset={100}
                        >
                          <div className="__content">
                            <i className="__ico">
                              <img
                                className="img-responsive lazy"
                                src="assets/img/blank.gif"
                                data-src="assets/img/feature_img/3_1.png"
                                width={46}
                                height={60}
                                alt="demo"
                              />
                            </i>
                            <h3 className="__title">Secure Storage</h3>
                            <p>
                              Whitebait Pacific viperfish, grideye boafish Canthigaster
                              rostrata brook lamprey, rock cod Billfish, brook lamprey
                              collared
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end item */}
                      {/* start item */}
                      <div className="col col--sm-6 col--lg-4">
                        <div
                          className="__item aos-init aos-animate"
                          data-aos="fade"
                          data-aos-delay={250}
                          data-aos-offset={100}
                        >
                          <div className="__content">
                            <i className="__ico">
                              <img
                                className="img-responsive lazy"
                                src="assets/img/blank.gif"
                                data-src="assets/img/feature_img/4_1.png"
                                width={60}
                                height={60}
                                alt="demo"
                              />
                            </i>
                            <h3 className="__title">Cryptocurrency Exchange</h3>
                            <p>
                              Yellow moray, Reedfish sergeant major. Blue-redstripe
                              danio kappy Sevan trout crocodile icefish collared
                              carpetshark.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end item */}
                      {/* start item */}
                      <div className="col col--sm-6 col--lg-4">
                        <div
                          className="__item aos-init aos-animate"
                          data-aos="fade"
                          data-aos-delay={300}
                          data-aos-offset={100}
                        >
                          <div className="__content">
                            <i className="__ico">
                              <img
                                className="img-responsive lazy"
                                src="assets/img/blank.gif"
                                data-src="assets/img/feature_img/8_1.png"
                                width={46}
                                height={56}
                                alt="demo"
                              />
                            </i>
                            <h3 className="__title">Safety and transparency</h3>
                            <p>
                              Weatherfish dragon goby mullet Bengal danio long-whiskered
                              catfish gray mullet boga prickly shark banjo catfish.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end item */}
                      {/* start item */}
                      <div className="col col--sm-6 col--lg-4">
                        <div
                          className="__item aos-init aos-animate"
                          data-aos="fade"
                          data-aos-delay={350}
                          data-aos-offset={100}
                        >
                          <div className="__content">
                            <i className="__ico">
                              <img
                                className="img-responsive lazy"
                                src="assets/img/blank.gif"
                                data-src="assets/img/feature_img/6_1.png"
                                width={64}
                                height={46}
                                alt="demo"
                              />
                            </i>
                            <h3 className="__title">Multycurrency Wallet</h3>
                            <p>
                              Dolly Varden trout sturgeon, morwong houndshark. Mooneye
                              bobtail snipe eel bichir slimy sculpin armorhead catfish
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end item */}
                    </div>
                  </div>
                </div>
                {/* end feature */}
              </div>
            </section>
            {/* end section */}
            {/* start section */}
            <section className="section section--with-border">
              <div className="grid grid--container">
                <div className="section-heading section-heading--center  col-MB-60">

                  <h5 className="__subtitle">Popular Cryptocarrency prices</h5>
                  <h2 className="__title">Cryptocurrency Prices</h2>
                </div>
                <div style={{ width: "100%", position: "relative" }}>
                  <canvas id="canvas_00001" width="100%" />
                </div>
              </div>
            </section>
            {/* end section */}
            {/* start section */}
            <section className="section jarallax" data-speed="0.4">
              <img className="jarallax-img" src="assets/img/bg_16.jpg" alt="demo" />
              <div className="grid grid--container">
                <div className="section-heading section-heading--white section-heading--center  col-MB-60">
                  <h5 className="__subtitle">Calculator</h5>
                  <h2 className="__title">
                    Calculate the Value of your Mining Farm Right Now
                  </h2>
                </div>
                {/* start calculator */}
                <div className="calculator">
                  <form action="assets/#">
                    <div className="row row--xs-bottom row--xs-middle">
                      <div className="col col--sm-10 col--md-5">
                        <div className="col-MB-40">
                          <span>Choose the model of the video card</span>
                          <div className="input-wrp">
                            <select className="js-select textfield">
                              <option value={0}>Nvidia GeForce GTX 1070 Ti 1</option>
                              <option value={1}>Nvidia GeForce GTX 1070 Ti 2</option>
                              <option value={2}>Nvidia GeForce GTX 1070 Ti 3</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col col--sm-5 col--md">
                        <div className="col-MB-40">
                          <span>Hash rate, Gh/s</span>
                          <div className="input-wrp">
                            <input
                              className="textfield"
                              type="text"
                              defaultValue=""
                              placeholder={14000.0}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col col--sm-5 col--md">
                        <div className="col-MB-40">
                          <span>Power, W</span>
                          <div className="input-wrp">
                            <input
                              className="textfield"
                              type="text"
                              defaultValue=""
                              placeholder={1370.0}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col col--sm-10 col--md">
                        <div className="col-MB-40">
                          <span>Cost, $/kWh</span>
                          <div className="input-wrp">
                            <input
                              className="textfield"
                              type="text"
                              defaultValue=""
                              placeholder="0.1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row row--xs-bottom row--xs-middle">
                      <div className="col col--sm-10 col--md-5 col--lg-3">
                        <div className="col-MB-40">
                          <span>Number of video cards</span>
                          <div className="input-wrp">
                            <select className="js-select textfield">
                              <option value={0}>8 Videocards</option>
                              <option value={1}>5 Videocards</option>
                              <option value={2}>2 Videocards</option>
                              <option value={3}>1 Videocards</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col col--sm-5 col--md">
                        <div className="col-MB-40">
                          <span>Number of farms</span>
                          <div className="input-wrp">
                            <select className="js-select textfield">
                              <option value={0}>1</option>
                              <option value={1}>2</option>
                              <option value={2}>3</option>
                              <option value={3}>4</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col col--sm-5 col--md">
                        <div className="col-MB-40">
                          <span>Hardware cost, $</span>
                          <div className="input-wrp">
                            <input
                              className="textfield"
                              type="text"
                              defaultValue=""
                              placeholder={1370.0}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col col--sm-8 col--lg-4">
                        <div className="col-MB-40">
                          <button
                            className="custom-btn custom-btn--medium custom-btn--style-2 wide"
                            type="submit"
                            role="button"
                          >
                            Calculate the cost of the farm
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="result  text--center text--sm-left">
                          <div className="row row--xs-middle row--md-between">
                            <div className="col col--sm-10 col--md-4 col--lg-3">
                              <div className="col-MB-40 col-md-MB-0">
                                <h4 className="result__title">
                                  Result of calculation:
                                </h4>
                                <p className="result__text">
                                  All calculations are based on data from whattomine.com
                                </p>
                              </div>
                            </div>
                            <div className="col col--sm-10 col--md-8 col--lg-9 col--xl-8">
                              <div className="row row--md-between">
                                <div className="col col--sm-auto col--md-auto">
                                  <div className="col-MB-30 col-lg-MB-0">
                                    <strong>Monthly Income</strong>
                                    <p className="result__value">$ 4 316</p>
                                  </div>
                                </div>
                                <div className="col col--sm-auto col--md-auto">
                                  <div className="col-MB-30 col-lg-MB-0">
                                    <strong>Weekly Income</strong>
                                    <p className="result__value">$ 1 007</p>
                                  </div>
                                </div>
                                <div className="col col--sm-auto col--md-auto">
                                  <div className="col-MB-30 col-lg-MB-0">
                                    <strong>Performance</strong>
                                    <p className="result__value">744 MH/s</p>
                                  </div>
                                </div>
                                <div className="col col--sm-auto col--md-auto">
                                  <div className="col-MB-30 col-lg-MB-0">
                                    <strong>Energy consumption</strong>
                                    <p className="result__value">4 320 W</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end calculator */}
              </div>
            </section>
            {/* end section */}
            {/* start section */}
            <section className="section">
              <div className="grid grid--container">
                <div className="section-heading section-heading--center  col-MB-60">
                  <h5 className="__subtitle">We sale products</h5>
                  <h2 className="__title">Our Equipment</h2>
                </div>
                {/* start goods */}
                <div className="goods">
                  <div className="__inner">
                    <div className="row">
                      {/* start item */}
                      <div className="col col--sm-6 col--md-4 col--lg-3">
                        <div
                          className="__item aos-init aos-animate"
                          data-aos="fade-up"
                          data-aos-delay={100}
                          data-aos-offset={200}
                        >
                          <figure className="__image">
                            <img
                              className="lazy"
                              src="assets/img/blank.gif"
                              data-src="assets/img/equipment_img/1.jpg"
                              alt="demo"
                            />
                            <a href="assets/#" />
                          </figure>
                          <div className="__content">
                            <h5 className="__title">
                              <a href="assets/#">TI-miner (High) GPU 4 Radeon RX 570</a>
                            </h5>
                            <p className="__subtitle">
                              <strong>Power:</strong>
                            </p>
                            <ul>
                              <li>ETH – 98 MH/s</li>
                              <li>ZEC – 1090 Sol/s</li>
                            </ul>
                            <span className="__price">$ 3 500</span>
                            <p className="text--center">
                              <a
                                className="custom-btn custom-btn--medium custom-btn--style-2"
                                href="assets/#"
                              >
                                Buy
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end item */}
                      {/* start item */}
                      <div className="col col--sm-6 col--md-4 col--lg-3">
                        <div
                          className="__item aos-init aos-animate"
                          data-aos="fade-up"
                          data-aos-delay={200}
                          data-aos-offset={200}
                        >
                          <figure className="__image">
                            <img
                              className="lazy"
                              src="assets/img/blank.gif"
                              data-src="assets/img/equipment_img/2.jpg"
                              alt="demo"
                            />
                            <a href="assets/#" />
                          </figure>
                          <div className="__content">
                            <h5 className="__title">
                              <a href="assets/#">TI-miner (Low) GPU 4 nVidia GTX 1060</a>
                            </h5>
                            <p className="__subtitle">
                              <strong>Power:</strong>
                            </p>
                            <ul>
                              <li>ETH – 73 MH/s</li>
                              <li>ZEC – 1080 Sol/s</li>
                            </ul>
                            <span className="__price">$ 2 300</span>
                            <p className="text--center">
                              <a
                                className="custom-btn custom-btn--medium custom-btn--style-2"
                                href="assets/#"
                              >
                                Buy
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end item */}
                      {/* start item */}
                      <div className="col col--sm-6 col--md-4 col--lg-3">
                        <div
                          className="__item aos-init aos-animate"
                          data-aos="fade-up"
                          data-aos-delay={300}
                          data-aos-offset={200}
                        >
                          <figure className="__image">
                            <img
                              className="lazy"
                              src="assets/img/blank.gif"
                              data-src="assets/img/equipment_img/3.jpg"
                              alt="demo"
                            />
                            <a href="assets/#" />
                          </figure>
                          <div className="__content">
                            <h5 className="__title">
                              <a href="assets/#">TI-miner (Low) GPU 4 nVidia GTX 1060</a>
                            </h5>
                            <p className="__subtitle">
                              <strong>Power:</strong>
                            </p>
                            <ul>
                              <li>ZEC – 2200 Sol/s</li>
                              <li>ETH – 106 MH/s</li>
                            </ul>
                            <span className="__price">$ 4 750</span>
                            <p className="text--center">
                              <a
                                className="custom-btn custom-btn--medium custom-btn--style-2"
                                href="assets/#"
                              >
                                Buy
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end item */}
                      {/* start item */}
                      <div className="col col--sm-6 col--md-4 col--lg-3">
                        <div
                          className="__item aos-init aos-animate"
                          data-aos="fade-up"
                          data-aos-delay={400}
                          data-aos-offset={200}
                        >
                          <figure className="__image">
                            <img
                              className="lazy"
                              src="assets/img/blank.gif"
                              data-src="assets/img/equipment_img/4.jpg"
                              alt="demo"
                            />
                            <a href="assets/#" />
                          </figure>
                          <div className="__content">
                            <h5 className="__title">
                              <a href="assets/#">TI-miner (VIP) GPU 4 nVidia GTX 1080</a>
                            </h5>
                            <p className="__subtitle">
                              <strong>Power:</strong>
                            </p>
                            <ul>
                              <li>ZEC – 3100 Sol/s</li>
                              <li>ETH – 159 MH/s</li>
                            </ul>
                            <span className="__price">$ 1 200</span>
                            <p className="text--center">
                              <a
                                className="custom-btn custom-btn--medium custom-btn--style-2"
                                href="assets/#"
                              >
                                Buy
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end item */}
                    </div>
                  </div>
                </div>
                {/* end goods */}
              </div>
            </section>
            {/* end section */}
            {/* start section */}
            <section className="section section--no-pt section--no-pb">
              <div className="grid grid--container">
                <div className="row">
                  <div className="col col--md-5 col--lg-4">
                    <div className="section-heading">
                      <h5 className="__subtitle">Shots of our data center</h5>
                      <h2 className="__title">Our Data center</h2>
                    </div>
                  </div>
                  <div className="col hide--md col-MB-10" />
                  <div className="col col--md-7 col--lg-8">
                    <p>
                      Data center guarantees trouble-free operation of your equipment,
                      control and monitoring for optimal external temperature, humidity,
                      dust protection.
                    </p>
                    <p>
                      Data center is protected from electric voltage jumps and broken
                      internet connections. Backuping of power supply systems provides
                      hours-long stable functioning of equipment in case if some
                      force-majeure circumstances occurs (instability of electric power
                      network, industrial network disconnection etc.). a duty engineer
                      proceeds to remove defects/failures at once after relevant
                      information is received.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-MB-50" />
              {/* start gallery */}
              <div className="gallery">
                <div className="__inner">
                  <div className="row">
                    {/* start item */}
                    <div className="col col--sm-6 col--md-5">
                      <div
                        className="__item aos-init aos-animate"
                        data-y={2}
                        ddata-aos="fade-up"
                        ddata-aos-delay={100}
                        ddata-aos-offset={200}
                      >
                        <figure className="__image">
                          <img
                            className="lazy"
                            src="assets/img/blank.gif"
                            data-src="assets/img/gallery_img/1.jpg"
                            alt="demo"
                          />
                        </figure>
                        <div className="__content">
                          <p>Modern Equipment</p>
                          <a
                            className="__link"
                            href="assets/img/gallery_img/1.jpg"
                            data-fancybox="gallery"
                          />
                        </div>
                      </div>
                    </div>
                    {/* end item */}
                    {/* start item */}
                    <div className="col col--sm-6 col--md-7">
                      <div
                        className="__item aos-init aos-animate"
                        data-y={2}
                        ddata-aos="fade-up"
                        ddata-aos-delay={100}
                        ddata-aos-offset={200}
                      >
                        <figure className="__image">
                          <img
                            className="lazy"
                            src="assets/img/blank.gif"
                            data-src="assets/img/gallery_img/2.jpg"
                            alt="demo"
                          />
                        </figure>
                        <div className="__content">
                          <p>Modern Equipment</p>
                          <a
                            className="__link"
                            href="assets/img/gallery_img/2.jpg"
                            data-fancybox="gallery"
                          />
                        </div>
                      </div>
                    </div>
                    {/* end item */}
                    {/* start item */}
                    <div className="col col--sm-6 col--lg-5">
                      <div
                        className="__item aos-init aos-animate"
                        data-y={1}
                        ddata-aos="fade-up"
                        ddata-aos-delay={100}
                        ddata-aos-offset={200}
                      >
                        <figure className="__image">
                          <img
                            className="lazy"
                            src="assets/img/blank.gif"
                            data-src="assets/img/gallery_img/3.jpg"
                            alt="demo"
                          />
                        </figure>
                        <div className="__content">
                          <p>Modern Equipment</p>
                          <a
                            className="__link"
                            href="assets/img/gallery_img/3.jpg"
                            data-fancybox="gallery"
                          />
                        </div>
                      </div>
                    </div>
                    {/* end item */}
                    {/* start item */}
                    <div className="col col--sm-6 col--lg-4">
                      <div
                        className="__item aos-init aos-animate"
                        data-y={1}
                        ddata-aos="fade-up"
                        ddata-aos-delay={100}
                        ddata-aos-offset={200}
                      >
                        <figure className="__image">
                          <img
                            className="lazy"
                            src="assets/img/blank.gif"
                            data-src="assets/img/gallery_img/4.jpg"
                            alt="demo"
                          />
                        </figure>
                        <div className="__content">
                          <p>Modern Equipment</p>
                          <a
                            className="__link"
                            href="assets/img/gallery_img/4.jpg"
                            data-fancybox="gallery"
                          />
                        </div>
                      </div>
                    </div>
                    {/* end item */}
                    {/* start item */}
                    <div className="col col--sm-6 col--lg-3">
                      <div
                        className="__item aos-init aos-animate"
                        data-y={1}
                        ddata-aos="fade-up"
                        ddata-aos-delay={100}
                        ddata-aos-offset={200}
                      >
                        <figure className="__image">
                          <img
                            className="lazy"
                            src="assets/img/blank.gif"
                            data-src="assets/img/gallery_img/5.jpg"
                            alt="demo"
                          />
                        </figure>
                        <div className="__content">
                          <p>Modern Equipment</p>
                          <a
                            className="__link"
                            href="assets/img/gallery_img/5.jpg"
                            data-fancybox="gallery"
                          />
                        </div>
                      </div>
                    </div>
                    {/* end item */}
                  </div>
                </div>
              </div>
              {/* end gallery */}
            </section>
            {/* end section */}
            {/* start section */}
            <section className="section section--dark-bg">
              <div className="grid grid--container">
                <div className="section-heading section-heading--white section-heading--center  col-MB-60">
                  <h5 className="__subtitle">We are in the world</h5>
                  <h2 className="__title">We have Users all Over the World</h2>
                </div>
                <img
                  className="lazy img-responsive center-block"
                  src="assets/img/blank.gif"
                  data-src="assets/img/world_map.png"
                  alt="demo"
                />
              </div>
            </section>
            {/* end section */}
            {/* start section */}
            <section className="section">
              <div className="grid grid--container">
                <div className="section-heading section-heading--center  col-MB-60">
                  <h5 className="__subtitle">FAQ</h5>
                  <h2 className="__title">Have any questions?</h2>
                </div>
                <div className="row row--xs-middle">
                  <div className="col col--md-10">
                    {/* start FAQ */}
                    <div className="faq">
                      <div className="accordion-container">
                        {/* start item */}
                        <div className="accordion-item">
                          <div className="accordion-toggler">
                            <h4 className="__title h5">
                              Can American citizens take part in the crowdsale?
                            </h4>
                            <i className="circled" />
                          </div>
                          <article>
                            <div className="__inner">
                              <p>
                                JavaScript is also used in environments that aren’t
                                web-based, such as PDF documents, site-specific
                                browsers, and desktop widgets. Newer and faster
                                JavaScript virtual machines (VMs) and platforms built
                                upon them have also increased the popularity of
                                JavaScript for server-side web applications. On the
                                client side, JavaScript has been traditionally
                                implemented as an interpreted language, but more recent
                                browsers per
                              </p>
                            </div>
                          </article>
                        </div>
                        {/* end item */}
                        {/* start item */}
                        <div className="accordion-item">
                          <div className="accordion-toggler">
                            <h4 className="__title h5">
                              Does the crowdsale comply with legal regulations?
                            </h4>
                            <i className="circled" />
                          </div>
                          <article>
                            <div className="__inner">
                              <p>
                                JavaScript is also used in environments that aren’t
                                web-based, such as PDF documents, site-specific
                                browsers, and desktop widgets. Newer and faster
                                JavaScript virtual machines (VMs) and platforms built
                                upon them have also increased the popularity of
                                JavaScript for server-side web applications. On the
                                client side, JavaScript has been traditionally
                                implemented as an interpreted language, but more recent
                                browsers per
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Odit quas molestias aut dolore fugiat at, neque
                                aliquam nesciunt dolor! Molestiae sunt magnam
                                asperiores, quasi blanditiis iste doloremque odit qui!
                                Neque?
                              </p>
                            </div>
                          </article>
                        </div>
                        {/* end item */}
                        {/* start item */}
                        <div className="accordion-item">
                          <div className="accordion-toggler">
                            <h4 className="__title h5">
                              Can I trade SCR at an exchange?
                            </h4>
                            <i className="circled" />
                          </div>
                          <article>
                            <div className="__inner">
                              <p>
                                JavaScript is also used in environments that aren’t
                                web-based, such as PDF documents, site-specific
                                browsers, and desktop widgets. Newer and faster
                                JavaScript virtual machines (VMs) and platforms built
                                upon them have also increased the popularity of
                                JavaScript for server-side web applications. On the
                                client side, JavaScript has been traditionally
                                implemented as an interpreted language, but more recent
                                browsers per
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Odit quas molestias aut dolore fugiat at, neque
                                aliquam nesciunt dolor! Molestiae sunt magnam
                                asperiores, quasi blanditiis iste doloremque odit qui!
                                Neque?
                              </p>
                            </div>
                          </article>
                        </div>
                        {/* end item */}
                        {/* start item */}
                        <div className="accordion-item">
                          <div className="accordion-toggler">
                            <h4 className="__title h5">
                              What is the difference between Scorum Coin tokens and
                              Scorum Power tokens?
                            </h4>
                            <i className="circled" />
                          </div>
                          <article>
                            <div className="__inner">
                              <p>
                                JavaScript is also used in environments that aren’t
                                web-based, such as PDF documents, site-specific
                                browsers, and desktop widgets. Newer and faster
                                JavaScript virtual machines (VMs) and platforms built
                                upon them have also increased the popularity of
                                JavaScript for server-side web applications. On the
                                client side, JavaScript has been traditionally
                                implemented as an interpreted language, but more recent
                                browsers per
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Odit quas molestias aut dolore fugiat at, neque
                                aliquam nesciunt dolor! Molestiae sunt magnam
                                asperiores, quasi blanditiis iste doloremque odit qui!
                                Neque?
                              </p>
                            </div>
                          </article>
                        </div>
                        {/* end item */}
                        {/* start item */}
                        <div className="accordion-item">
                          <div className="accordion-toggler">
                            <h4 className="__title h5">
                              Why is Scorum’s economic model sustainable?
                            </h4>
                            <i className="circled" />
                          </div>
                          <article>
                            <div className="__inner">
                              <p>
                                JavaScript is also used in environments that aren’t
                                web-based, such as PDF documents, site-specific
                                browsers, and desktop widgets. Newer and faster
                                JavaScript virtual machines (VMs) and platforms built
                                upon them have also increased the popularity of
                                JavaScript for server-side web applications. On the
                                client side, JavaScript has been traditionally
                                implemented as an interpreted language, but more recent
                                browsers per
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Odit quas molestias aut dolore fugiat at, neque
                                aliquam nesciunt dolor! Molestiae sunt magnam
                                asperiores, quasi blanditiis iste doloremque odit qui!
                                Neque?
                              </p>
                            </div>
                          </article>
                        </div>
                        {/* end item */}
                        {/* start item */}
                        <div className="accordion-item">
                          <div className="accordion-toggler">
                            <h4 className="__title h5">Can I mine SCR?</h4>
                            <i className="circled" />
                          </div>
                          <article>
                            <div className="__inner">
                              <p>
                                JavaScript is also used in environments that aren’t
                                web-based, such as PDF documents, site-specific
                                browsers, and desktop widgets. Newer and faster
                                JavaScript virtual machines (VMs) and platforms built
                                upon them have also increased the popularity of
                                JavaScript for server-side web applications. On the
                                client side, JavaScript has been traditionally
                                implemented as an interpreted language, but more recent
                                browsers per
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Odit quas molestias aut dolore fugiat at, neque
                                aliquam nesciunt dolor! Molestiae sunt magnam
                                asperiores, quasi blanditiis iste doloremque odit qui!
                                Neque?
                              </p>
                            </div>
                          </article>
                        </div>
                        {/* end item */}
                      </div>
                      <div className="text--center">
                        <a
                          className="custom-btn custom-btn--medium custom-btn--style-1"
                          href="assets/#"
                        >
                          Show more
                        </a>
                      </div>
                    </div>
                    {/* end FAQ */}
                  </div>
                </div>
              </div>
            </section>
            {/* end section */}
            {/* start section */}
            <section className="section section--light-bg">
              <div className="grid">
                <div className="section-heading section-heading--center  col-MB-60">
                  <h2 className="__title">Latest News &amp; Blog</h2>
                </div>
                {/* start posts */}
                <div
                  className="posts posts--slider slick-initialized slick-slider slick-dotted"
                  data-slick='{"autoplay": true, "dots": true, "speed": 1000}'
                >
                  {/* start item */}
                  <div className="__item __item--preview">
                    <div className="__content">
                      <p className="__category">
                        <a href="assets/#" tabIndex="auto">Cryptocurrency</a>
                      </p>
                      <h3 className="__title h4">
                        <a href="assets/#" tabIndex="auto">New trends in UI/UX Design World Integration</a>
                      </h3>
                      <p className="__text">
                        Specially for our VIP customers the LH Crypto team
                        representatives Alexander Smirnov and Antonis Lapos will conduct
                        a number of
                      </p>
                      <span className="__date-post">September, 15 2017</span>
                    </div>
                  </div>
                  {/* end item */}
                  {/* start item */}
                  <div className="__item __item--preview">
                    <div className="__content">
                      <p className="__category">
                        <a href="assets/#" tabIndex="auto">Bitcoin</a>
                      </p>
                      <h3 className="__title h4">
                        <a href="assets/#" tabIndex="auto">The LH-Crypto project has reached $7 000 000!</a>
                      </h3>
                      <p className="__text">
                        The meetings will take place in the following cities: 15 January
                        – Milan, 16 January – Lugano, 17 January – Zurich, 18 Jan
                      </p>
                      <span className="__date-post">September, 15 2017</span>
                    </div>
                  </div>
                  {/* end item */}
                  {/* start item */}
                  <div className="__item __item--preview">
                    <div className="__content">
                      <p className="__category">
                        <a href="assets/#" tabIndex="auto">ICO</a>
                      </p>
                      <h3 className="__title h4">
                        <a href="assets/#" tabIndex="auto">Crypto project has reached NormalCap!</a>
                      </h3>
                      <p className="__text">
                        Many desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search for
                      </p>
                      <span className="__date-post">September, 15 2017</span>
                    </div>
                  </div>
                  {/* end item */}
                  {/* start item */}
                  <div className="__item __item--preview">
                    <div className="__content">
                      <p className="__category">
                        <a href="assets/#" tabIndex="auto">Blockchain</a>
                      </p>
                      <h3 className="__title h4">
                        <a href="assets/#" tabIndex="auto">Start the redemption before the ICO completion</a>
                      </h3>
                      <p className="__text">
                        Lh-Crypto project buys 10% of the total amount of LHC tokens
                        sold at a double rate. Thus, even now, project investors can
                        receive an
                      </p>
                      <span className="__date-post">September, 15 2017</span>
                    </div>
                  </div>
                  {/* end item */}
                  {/* start item */}
                  <div className="__item __item--preview">
                    <div className="__content">
                      <p className="__category">
                        <a href="assets/#" tabIndex="auto">Cryptocurrency</a>
                      </p>
                      <h3 className="__title h4">
                        <a href="assets/#" tabIndex="auto">New trends in UI/UX Design World Integration</a>
                      </h3>
                      <p className="__text">
                        Specially for our VIP customers the LH Crypto team
                        representatives Alexander Smirnov and Antonis Lapos will conduct
                        a number of
                      </p>
                      <span className="__date-post">September, 15 2017</span>
                    </div>
                  </div>
                  {/* end item */}
                  {/* start item */}
                  <div className="__item __item--preview">
                    <div className="__content">
                      <p className="__category">
                        <a href="assets/#" tabIndex="auto">Bitcoin</a>
                      </p>
                      <h3 className="__title h4">
                        <a href="assets/#" tabIndex="auto">The LH-Crypto project has reached $7 000 000!</a>
                      </h3>
                      <p className="__text">
                        The meetings will take place in the following cities: 15 January
                        – Milan, 16 January – Lugano, 17 January – Zurich, 18 Jan
                      </p>
                      <span className="__date-post">September, 15 2017</span>
                    </div>
                  </div>
                  {/* end item */}
                  {/* start item */}
                  <div className="__item __item--preview">
                    <div className="__content">
                      <p className="__category">
                        <a href="assets/#" tabIndex="auto">ICO</a>
                      </p>
                      <h3 className="__title h4">
                        <a href="assets/#" tabIndex="auto">Crypto project has reached NormalCap!</a>
                      </h3>
                      <p className="__text">
                        Many desktop publishing packages and web page editors now use
                        Lorem Ipsum as their default model text, and a search for
                      </p>
                      <span className="__date-post">September, 15 2017</span>
                    </div>
                  </div>
                  {/* end item */}
                  {/* start item */}
                  <div className="__item __item--preview">
                    <div className="__content">
                      <p className="__category">
                        <a href="assets/#" tabIndex="auto">Blockchain</a>
                      </p>
                      <h3 className="__title h4">
                        <a href="assets/#" tabIndex="auto">Start the redemption before the ICO completion</a>
                      </h3>
                      <p className="__text">
                        Lh-Crypto project buys 10% of the total amount of LHC tokens
                        sold at a double rate. Thus, even now, project investors can
                        receive an
                      </p>
                      <span className="__date-post">September, 15 2017</span>
                    </div>
                  </div>
                  {/* end item */}
                </div>
                {/* end posts */}
              </div>
            </section>
            {/* end section */}
            {/* start section */}
            <section className="section section--base-bg jarallax" data-speed="0.5">
              <img className="jarallax-img" src="assets/img/bg_17.jpg" alt="demo" />
              <div className="grid grid--container">
                {/* start testimonial slider */}
                <div className="row">
                  <div className="col col--md-2  hide show--md">
                    <i className="testimonial-ico">“</i>
                  </div>
                  <div className="col col--md-10">
                    {/* start testimonial */}
                    <div
                      className="testimonial testimonial--slider"
                      data-slick='{"autoplay": true, "arrows": false, "dots": true, "speed": 1000}'
                    >
                      {/* start item */}
                      <div className="__item aos-init aos-animate">
                        <div className="__text">
                          <p>
                            Oh no way! Can I arks you a question, this heaps good hokey
                            pokey is as stuffed as a snarky misses. Good afterble
                            constanoon. Can't handle the jandle, do you happen to have a
                            bucket or a hose bro?, piece of piss. Mean while, in the
                            marae, Maui and the Armed Offenders Squad were up to no good
                            with a bunch of sweet pavlovas. Chur bro, you're not in
                            Guatemala now.
                          </p>
                        </div>
                        <div className="__author">
                          <h5 className="__author--name">Joseph Allan</h5>
                          <span className="__author--position">
                            CEO Silver Development
                          </span>
                        </div>
                      </div>
                      {/* end item */}
                      {/* start item */}
                      <div className="__item aos-init aos-animate">
                        <div className="__text">
                          <p>
                            Oh no way! Can I arks you a question, this heaps good hokey
                            pokey is as stuffed as a snarky misses. Good afterble
                            constanoon. Can't handle the jandle, do you happen to have a
                            bucket or a hose bro?, piece of piss. Mean while, in the
                            marae, Maui and the Armed Offenders Squad were up to no good
                            with a bunch of sweet pavlovas. Chur bro, you're not in
                            Guatemala now.
                          </p>
                          <p>
                            Oh no way! Can I arks you a question, this heaps good hokey
                            pokey is as stuffed as a snarky misses. Good afterble
                            constanoon. Can't handle the jandle, do you happen to have a
                            bucket or a hose bro?, piece of piss. Mean while, in the
                            marae, Maui and the Armed Offenders Squad were up to no good
                            with a bunch of sweet pavlovas. Chur bro, you're not in
                            Guatemala now.
                          </p>
                        </div>
                        <div className="__author">
                          <h5 className="__author--name">Joseph Allan</h5>
                          <span className="__author--position">
                            CEO Silver Development
                          </span>
                        </div>
                      </div>
                      {/* end item */}
                      {/* start item */}
                      <div className="__item aos-init aos-animate">
                        <div className="__text">
                          <p>
                            Oh no way! Can I arks you a question, this heaps good hokey
                            pokey is as stuffed as a snarky misses. Good afterble
                            constanoon. Can't handle the jandle, do you happen to have a
                            bucket or a hose bro?, piece of piss. Mean while, in the
                            marae, Maui and the Armed Offenders Squad were up to no good
                            with a bunch of sweet pavlovas. Chur bro, you're not in
                            Guatemala now.
                          </p>
                        </div>
                        <div className="__author">
                          <h5 className="__author--name">Joseph Allan</h5>
                          <span className="__author--position">
                            CEO Silver Development
                          </span>
                        </div>
                      </div>
                      {/* end item */}
                    </div>
                    {/* end testimonial */}
                  </div>
                </div>
                {/* end testimonial slider */}
              </div>
            </section>
            {/* end section */}
            {/* start section */}
            <section className="section">
              <div className="grid grid--container">
                <div className="row">
                  <div className="col col--md-5 col--lg-4">
                    <div className="section-heading">
                      <h5 className="__subtitle">who helps us</h5>
                      <h2 className="__title">Mining Farm Partners</h2>
                    </div>
                  </div>
                  <div className="col hide--md col-MB-10" />
                  <div className="col col--md-7 col--lg-8">
                    <div className="logos">
                      <div className="__inner">
                        <div className="row row--xs-center row--xs-around">
                          <div className="col col--xs-auto col--lg-4">
                            <img
                              className="lazy"
                              src="assets/img/blank.gif"
                              data-src="assets/img/logos_img/15.png"
                              alt="demo"
                            />
                          </div>
                          <div className="col col--xs-auto col--lg-4">
                            <img
                              className="lazy"
                              src="assets/img/blank.gif"
                              data-src="assets/img/logos_img/14.png"
                              alt="demo"
                            />
                          </div>
                          <div className="col col--xs-auto col--lg-4">
                            <img
                              className="lazy"
                              src="assets/img/blank.gif"
                              data-src="assets/img/logos_img/19.png"
                              alt="demo"
                            />
                          </div>
                          <div className="col col--xs-auto col--lg-4">
                            <img
                              className="lazy"
                              src="assets/img/blank.gif"
                              data-src="assets/img/logos_img/16.png"
                              alt="demo"
                            />
                          </div>
                          <div className="col col--xs-auto col--lg-4">
                            <img
                              className="lazy"
                              src="assets/img/blank.gif"
                              data-src="assets/img/logos_img/17.png"
                              alt="demo"
                            />
                          </div>
                          <div className="col col--xs-auto col--lg-4">
                            <img
                              className="lazy"
                              src="assets/img/blank.gif"
                              data-src="assets/img/logos_img/18.png"
                              alt="demo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end section */}
            {/* start section */}
            <section className="section section--dark-bg">
              <div className="grid grid--container">
                <div className="row">
                  <div className="col col--md-7 col--xl-6">
                    <div className="section-heading section-heading--white  col-MB-30">
                      <h5 className="__subtitle">Get in touch</h5>
                      <h2 className="__title">We can Help You</h2>
                    </div>
                    <p>
                      Data center guarantees trouble-free operation of your equipment,
                      control and monitoring for optimal external temperature, humidity,
                      dust protection.
                    </p>
                  </div>
                  <div className="col col-MB-20" />
                  <div className="col">
                    <form className="js-contact-form" action="#">
                      <div className="row">
                        <div className="col col--md-6">
                          <div className="input-wrp">
                            <input
                              className="textfield"
                              name="name"
                              type="text"
                              defaultValue=""
                              placeholder="Name"
                            />
                          </div>
                          <div className="input-wrp">
                            <input
                              className="textfield"
                              name="email"
                              type="text"
                              defaultValue=""
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col col--md-6">
                          <div className="input-wrp">
                            <textarea
                              className="textfield"
                              name="message"
                              placeholder="Comments"
                              defaultValue={""}
                            />
                          </div>
                          <button
                            className="custom-btn custom-btn--medium custom-btn--style-2"
                            type="submit"
                            role="button"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                      <div className="form__note" />
                    </form>
                  </div>
                </div>
              </div>
            </section>
            {/* end section */} 
            {/* start section */}
            <section className="section section--no-pt section--no-pb">
              {/* this is demo key "AIzaSyBXQROV5YMCERGIIuwxrmaZbBl_Wm4Dy5U" */}
              <div
                id="g_map--0002"
                className="g_map"
                data-api-key="AIzaSyBXQROV5YMCERGIIuwxrmaZbBl_Wm4Dy5U"
                data-longitude="44.958309"
                data-latitude="34.109925"
                data-marker="assets/img/marker.png"
              />
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                #g_map--0002 {\n                    height: 250px\n                }\n            "
                }}
              />
            </section>
            {/* end section */}
          </main>
          {/* end main */}
          {/* start footer */}
          <footer id="footer" className="text--center text--lg-left">
            <div className="grid grid--container">
              <div className="row row--xs-middle">
                <div className="col col--sm-10 col--md-8 col--lg-3">
                  <div className="__item">
                    <a
                      className="site-logo"
                      href="assets/index.html"
                      style={{ margin: "0 0 20px" }}
                    >
                      <img
                        className="img-responsive lazy"
                        width={175}
                        height={42}
                        src="assets/img/blank.gif"
                        data-src="assets/img/site_logo.png"
                        alt="demo"
                      />
                    </a>
                    <div className="social-btns">
                      <a className="fontello-twitter" href="assets/#" />
                      <a className="fontello-facebook" href="assets/#" />
                      <a className="fontello-linkedin-squared" href="assets/#" />
                    </div>
                    <span className="__copy">
                      © 2018, Crypterium Theme by{" "}
                      <a className="__dev" href="assets/#" target="_blank">
                        Artureanec
                      </a>{" "}
                      | <a href="assets/#">Privacy&nbsp;Policy</a> | <a href="assets/#">Sitemap</a>
                    </span>
                  </div>
                </div>
                <div className="col col--sm-10 col--md-8 col--lg-4">
                  <div className="__item">
                    <h4 className="__title">Contact Information</h4>
                    <address className="__text">
                      1010 Avenue of the Moon New York,
                      <br /> NY 10018 US.
                      <br />
                      Call Us: <a href="assets/tel:+1(066)05239876">(066) 052 39876</a>
                      <br />
                      Email: <a href="assets/mailto:nfo@cryptonet.co">nfo@cryptonet.co</a>
                    </address>
                  </div>
                </div>
                <div className="col col--sm-10 col--md-8 col--lg-5">
                  <div className="__item">
                    <h4 className="__title">Main menu</h4>
                    <nav id="footer__navigation" className="navigation">
                      <div className="row row--xs-middle">
                        <div className="col col--xs-auto col--md-3 col--lg-4">
                          <ul className="__menu">
                            <li>
                              <a href="assets/#">Home</a>
                            </li>
                            <li>
                              <a href="assets/#">About us</a>
                            </li>
                            <li>
                              <a href="assets/#">Contacts</a>
                            </li>
                            <li>
                              <a href="assets/#">News</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col col--xs-auto col--md-3 col--lg-4">
                          <ul className="__menu">
                            <li>
                              <a href="assets/#">Events</a>
                            </li>
                            <li>
                              <a href="assets/#">Wallet</a>
                            </li>
                            <li>
                              <a href="assets/#">FAQ’s</a>
                            </li>
                            <li>
                              <a href="assets/#">Support</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col hide--md col-MB-20" />
                        <div className="col col--xs-auto col--md-auto col--lg-4">
                          <ul className="__menu">
                            <li>
                              <a href="assets/#">Application</a>
                            </li>
                            <li>
                              <a href="assets/#">Web design</a>
                            </li>
                            <li>
                              <a href="assets/#">UI/UX design</a>
                            </li>
                            <li>
                              <a href="assets/#">Documentation</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* end footer */}
          <div id="btn-to-top-wrap">
            <a
              id="btn-to-top"
              className="circled"
              href="assets/javascript:void(0);"
              data-visible-offset={800}
            />
          </div>
          {/* Google Analytics: change UA-XXXXX-X to be your site's ID. */}
        </>

      </div>
    );
  }
}

export default Home;