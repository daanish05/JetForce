import Image from "next/image";

const About = () =>{
    return(
        <>
        <section className="overflow-hidden">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <div
                className="subtitle s2 mb-0 wow fadeInUp"
                data-wow-delay=".0s"
              >
                About Us
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                Unmatched Surveillance, Unrivaled Protection
              </h2>
            </div>
            <div className="col-lg-6 wow fadeInUp">
              <p>
                Pariatur nulla et laboris ut nisi aute eu cillum aute nulla anim
                consectetur proident eu qui elit dolor ut sunt occaecat eiusmod
                aliquip magna incididunt consequat reprehenderit incididunt
                dolore ad culpa enim et exercitation ex do magna.
              </p>
            </div>
          </div>
          <div className="row bo g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInRight"
              data-wow-delay="0s"
            >
              <div className="relative bg-grey p-40 h-100">
                <img
                  src="images/svg-color/cctv.svg"
                  className="w-70px mb-3"
                  alt=""
                />
                <h4>Installation</h4>
                <p>
                  Setting up cameras in strategic locations to ensure optimal
                  coverage.
                </p>
                <div className="triangle-bottomright-white" />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="relative bg-grey p-40 h-100">
                <img
                  src="images/svg-color/networking.svg"
                  className="w-70px mb-3"
                  alt=""
                />
                <h4>System Design</h4>
                <p>
                  Customized security system planning to meet specific
                  requirements.
                </p>
                <div className="triangle-bottomright-white" />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInRight"
              data-wow-delay=".4s"
            >
              <div className="relative bg-grey p-40 h-100">
                <img
                  src="images/svg-color/setting.svg"
                  className="w-70px mb-3"
                  alt=""
                />
                <h4>Maintenance</h4>
                <p>
                  Regular servicing and fixing of camera systems to ensure
                  continuous functionality.
                </p>
                <div className="triangle-bottomright-white" />
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInRight"
              data-wow-delay=".6s"
            >
              <div className="relative bg-grey p-40 h-100">
                <img
                  src="images/svg-color/monitor.svg"
                  className="w-70px mb-3"
                  alt=""
                />
                <h4>Monitoring</h4>
                <p>
                  Real-time monitoring of security cameras by professionals or
                  automated systems.
                </p>
                <div className="triangle-bottomright-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}

export default About;