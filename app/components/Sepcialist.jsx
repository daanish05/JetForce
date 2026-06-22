import Link from "next/link";
import Image from "next/image";

const Specialist = () =>{
    return(
        <>
        <section className="bg-dark text-light">
        <div className="sw-overlay op-6" />
        <div className="container">
          <div className="row justify-content-center g-4 gx-5 relative z-index-1000">
            <div className="col-lg-8 text-center">
              <div className="subtitle wow fadeInUp mb-3">CCTV Specialist</div>
              <h2 className="mb20 wow fadeInUp" data-wow-delay=".2s">
                At Ucam, we specialize in providing top-tier CCTV surveillance
                solutions designed to keep your property safe and secure.
              </h2>
              <a className="btn-main btn-line fx-slide" href="contact.html">
                <span>Get a Free Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-color pt60 pb60">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInRight"
              data-wow-delay=".2s"
            >
              <a
                href="contact.html"
                className="d-block relative bg-dark-2 text-light p-4 rounded-1"
              >
                <i className="id-color p-3 rounded-1 fs-56 icofont-phone-circle" />
                <div className="absolute abs-middle ms-90px">
                  <span>Emergency Service</span>
                  <h4>Call (123) 202-9296</h4>
                </div>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInRight"
              data-wow-delay=".4s"
            >
              <a
                href="contact.html"
                className="d-block relative bg-dark-2 text-white p-4 rounded-1"
              >
                <i className="id-color p-3 rounded-1 fs-56 icofont-calculator" />
                <div className="absolute abs-middle ms-90px">
                  <span>Request For</span>
                  <h4>Free Estimation</h4>
                </div>
              </a>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInRight"
              data-wow-delay=".6s"
            >
              <a
                href="projects.html"
                className="d-block relative bg-dark-2 text-white p-4 rounded-1"
              >
                <i className="id-color p-3 rounded-1 fs-56 icofont-image" />
                <div className="absolute abs-middle ms-90px">
                  <span>Discover</span>
                  <h4>Latest Projects</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}
export default Specialist;