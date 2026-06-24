import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return(
        <>
        <footer>
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-4 col-sm-6">
            <Image src="/images/logo.webp" className="w-150px" alt="" width={150} height={30} />
            <div className="spacer-20" />
            <p>
              Keep your home or business safe with CCTV systems designed to
              provide 24/7 surveillance and peace of mind. Our expert team
              offers tailored security solutions, from installation to remote
              monitoring, ensuring your property is always protected.{" "}
            </p>
            <div className="social-icons mb-sm-30">
              <Link href="#">
                <i className="fa-brands fa-facebook-f" />
              </Link>
              <Link href="#">
                <i className="fa-brands fa-x-twitter" />
              </Link>
              <Link href="#">
                <i className="fa-brands fa-discord" />
              </Link>
              <Link href="#">
                <i className="fa-brands fa-tiktok" />
              </Link>
              <Link href="#">
                <i className="fa-brands fa-youtube" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 order-lg-1 order-sm-2">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <div className="widget">
                  <h5>Company</h5>
                  <ul>
                    <li>
                      <Link href="index.html">Home</Link>
                    </li>
                    <li>
                      <Link href="services">Our Services</Link>
                    </li>
                    <li>
                      <Link href="projects.html">Projects</Link>
                    </li>
                    <li>
                      <Link href="contact.html">Get a Free Quote</Link>
                    </li>
                    <li>
                      <Link href="blog.html">Blog</Link>
                    </li>
                    <li>
                      <Link href="contact.html">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="widget">
                  <h5>Our Services</h5>
                  <ul>
                    <li>
                      <Link href="services.html">System Consultation</Link>
                    </li>
                    <li>
                      <Link href="services.html">Installation Services</Link>
                    </li>
                    <li>
                      <Link href="services.html">System Configuration</Link>
                    </li>
                    <li>
                      <Link href="services.html">Monitoring Services</Link>
                    </li>
                    <li>
                      <Link href="services.html">Maintenance</Link>
                    </li>
                    <li>
                      <Link href="services.html">Storage and Backup</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 order-lg-2 order-sm-1">
            <div className="widget">
              <div className="fw-bold text-white">
                <i className="icofont-clock-time me-2 id-color" />
                We're Open
              </div>
              Monday - Saturday 08.00 - 18.00
              <div className="spacer-20" />
              <div className="fw-bold text-white">
                <i className="icofont-location-pin me-2 id-color" />
                Workshop Location
              </div>
              100 S Main St, New York, NY
              <div className="spacer-20" />
              <div className="fw-bold text-white">
                <i className="icofont-envelope me-2 id-color" />
                Send a Message
              </div>
              contact@ucam-cctv.com
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex">
                <div className="de-flex-col">
                  Copyright 2025 - Ucam by Designesia
                </div>
                <ul className="menu-simple">
                  <li>
                    <Link href="#">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
    );
}

export default Footer;
