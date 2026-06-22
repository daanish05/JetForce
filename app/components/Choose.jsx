import Image from "next/image";

const Choose = () =>{
    return(
        <>
        <section>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-lg-6 wow fadeInRight">
                  <div className="relative">
                    <img src="images/misc/1.webp" className="w-100" alt="" />
                    <div className="triangle-bottomright-white z-2" />
                    <div className="de-overlay-gradient-color h-50 top-50" />
                  </div>
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-delay=".3s">
                  <div className="relative">
                    <img src="images/misc/2.webp" className="w-100" alt="" />
                    <div className="triangle-bottomright-white z-2" />
                    <div className="de-overlay-gradient-color h-50 top-50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ms-lg-4">
                <div
                  className="subtitle s2 mb-3 wow fadeInUp"
                  data-wow-delay=".0s"
                >
                  Why Choose Us
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Protecting What Matters, Day and Night
                </h2>
                <p className="wow fadeIn" data-wow-delay=".4s">
                  Ex esse ex cupidatat magna dolor ad deserunt velit consequat
                  dolore minim velit enim velit sed incididunt minim aliqua
                  veniam labore nulla nostrud dolor dolore.
                </p>
                <div className="row g-4">
                  <div className="col-lg-8 col-md-12 col-sm-6">
                    <ul
                      className="ul-style-2 fw-600 mb-4 wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <li>Expertise You Can Trust</li>
                      <li>Custom Solutions for Every Budget</li>
                      <li>24/7 Support and Maintenance</li>
                      <li>Comprehensive Security Solutions</li>
                    </ul>
                  </div>
                </div>
                <a
                  className="btn-main fx-slide mb10 mb-3 wow fadeIn"
                  href="contact.html"
                >
                  <span>Get a Free Quote</span>
                </a>
              </div>
            </div>
          </div>
          <div className="spacer-single" />
          <div className="row g-4">
            <div className="col-md-3 col-sm-6 mb-sm-30">
              <div
                className="de_count text-center fs-15 wow fadeInRight"
                data-wow-delay=".0s"
              >
                <h3 className="fs-48 mb-1">
                  <span className="timer" data-to={8240} data-speed={3000}>
                    0
                  </span>
                </h3>
                <div className="fs-15">Hours of Works</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-sm-30">
              <div
                className="de_count text-center fs-15 wow fadeInRight"
                data-wow-delay=".2s"
              >
                <h3 className="fs-48 mb-1">
                  <span className="timer" data-to={315} data-speed={3000}>
                    0
                  </span>
                </h3>
                <div className="fs-15">Projects Done</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-sm-30">
              <div
                className="de_count text-center fs-15 wow fadeInRight"
                data-wow-delay=".4s"
              >
                <h3 className="fs-48 mb-1">
                  <span className="timer" data-to={250} data-speed={3000}>
                    0
                  </span>
                </h3>
                <div className="fs-15">Satisfied Customers</div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-sm-30">
              <div
                className="de_count text-center fs-15 wow fadeInRight"
                data-wow-delay=".6s"
              >
                <h3 className="fs-48 mb-1">
                  <span className="timer" data-to={32} data-speed={3000}>
                    0
                  </span>
                </h3>
                <div className="fs-15">Awards Winning</div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
} 

export default Choose;