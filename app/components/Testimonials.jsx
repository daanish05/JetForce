import Link from "next/link";
import Image from "next/image";

const Testimonials = () =>{
    return(
        <>
        <section className="bg-dark text-light">
        <div className="container">
          <div className="row g-4 mb-4">
            <div className="col-lg-6 offset-lg-3 text-center">
              <div className="subtitle wow fadeInUp mb-3">Testimonials</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                Our Happy Customers
              </h2>
            </div>
          </div>
          <div className="row g-4">
            <div
              className="owl-carousel owl-theme wow fadeInUp"
              id="testimonial-carousel"
            >
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/1.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Michael S.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/2.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Robert L.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/3.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Jake M.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/4.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Alex P.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/5.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Carlos R.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/6.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Edward B.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/7.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Daniel H.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
              <div className="item">
                <div className="bg-dark-2 p-40 relative text-light text-center">
                  <div className="text-center">
                    <img
                      className="d-inline w-80px rounded-1"
                      alt=""
                      src="images/testimonial/8.webp"
                    />
                  </div>
                  <div className="mt-3 fw-600">
                    Bryan G.<span>Customer</span>
                  </div>
                  <div className="de-rating-ext mb-3">
                    <span className="d-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                  </div>
                  <p className="mb-0">
                    "The system is easy to use, the image quality is crystal
                    clear, and their customer service has been exceptional.
                    Highly recommend!"
                  </p>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}

export default Testimonials;