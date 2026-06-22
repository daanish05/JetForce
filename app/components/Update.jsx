import Link from "next/link";
import Image from "next/image";


const StayUpdate = () =>{
    return(
        <>
        <section className="bg-dark text-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 offset-lg-3 text-center">
              <div className="subtitle wow fadeInUp mb-3">Stay Update</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                Our Blog
              </h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3">
              <div className="overflow-hidden">
                <div className="hover relative rounded-1 overflow-hidden">
                  <div className="abs z-2 bg-color text-white p-3 pb-2 m-4 text-center fw-600">
                    <h4 className="fs-36 mb-0 lh-1">20</h4>
                    <span>Jun</span>
                  </div>
                  <img
                    src="images/news/1.webp"
                    className="w-100 hover-scale-1-1"
                    alt=""
                  />
                  <a
                    href="blog-single.html"
                    className="d-block abs w-100 h-100 top-0 start-0"
                  />
                </div>
                <div className="p-40 bg-dark-2 relative">
                  <h4>
                    <a className="text-white" href="blog-single.html">
                      Smart Security Cameras: Shaping the Future of Surveillance
                    </a>
                  </h4>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="overflow-hidden">
                <div className="hover relative rounded-1 overflow-hidden">
                  <div className="abs z-2 bg-color text-white p-3 pb-2 m-4 text-center fw-600">
                    <h4 className="fs-36 mb-0 lh-1">19</h4>
                    <span>Jun</span>
                  </div>
                  <img
                    src="images/news/2.webp"
                    className="w-100 hover-scale-1-1"
                    alt=""
                  />
                  <a
                    href="blog-single.html"
                    className="d-block abs w-100 h-100 top-0 start-0"
                  />
                </div>
                <div className="p-40 bg-dark-2 relative">
                  <h4>
                    <a className="text-white" href="blog-single.html">
                      How Security Camera Footage is Solving Major Crimes
                    </a>
                  </h4>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="overflow-hidden">
                <div className="hover relative rounded-1 overflow-hidden">
                  <div className="abs z-2 bg-color text-white p-3 pb-2 m-4 text-center fw-600">
                    <h4 className="fs-36 mb-0 lh-1">18</h4>
                    <span>Jun</span>
                  </div>
                  <img
                    src="images/news/3.webp"
                    className="w-100 hover-scale-1-1"
                    alt=""
                  />
                  <a
                    href="blog-single.html"
                    className="d-block abs w-100 h-100 top-0 start-0"
                  />
                </div>
                <div className="p-40 bg-dark-2 relative">
                  <h4>
                    <a className="text-white" href="blog-single.html">
                      The Growing Role of Security Cameras in Public Safety
                    </a>
                  </h4>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="overflow-hidden">
                <div className="hover relative rounded-1 overflow-hidden">
                  <div className="abs z-2 bg-color text-white p-3 pb-2 m-4 text-center fw-600">
                    <h4 className="fs-36 mb-0 lh-1">17</h4>
                    <span>Jun</span>
                  </div>
                  <img
                    src="images/news/4.webp"
                    className="w-100 hover-scale-1-1"
                    alt=""
                  />
                  <a
                    href="blog-single.html"
                    className="d-block abs w-100 h-100 top-0 start-0"
                  />
                </div>
                <div className="p-40 bg-dark-2 relative">
                  <h4>
                    <a className="text-white" href="blog-single.html">
                      Privacy Concerns Rise with Increased Security Cameras Use
                    </a>
                  </h4>
                  <div className="triangle-bottomright-dark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>
    );
}


export default StayUpdate;