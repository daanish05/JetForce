
import Image from "next/image";

 const Querys = () => {
    return(
        <>
        <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 text-center">
              <div className="subtitle wow fadeInUp mb-3">Do you have</div>
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                Any Questions
              </h2>
            </div>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-12">
              <div className="accordion s2 wow fadeInUp">
                <div className="accordion-section">
                  <div
                    className="accordion-section-title"
                    data-tab="#accordion-a1"
                  >
                    What is the installation process for CCTV?
                  </div>
                  <div className="accordion-section-content" id="accordion-a1">
                    The installation process generally includes:
                    <ol>
                      <li>Site assessment to determine camera placement.</li>
                      <li>
                        Running necessary cabling for power and data (for wired
                        systems).
                      </li>
                      <li>Mounting cameras and positioning them properly.</li>
                      <li>
                        Setting up recording devices (DVR/NVR) and configuring
                        software for monitoring and storage.
                      </li>
                    </ol>
                  </div>
                  <div
                    className="accordion-section-title"
                    data-tab="#accordion-a2"
                  >
                    How many cameras do I need?
                  </div>
                  <div className="accordion-section-content" id="accordion-a2">
                    The number of cameras depends on the size of the area to be
                    covered and the level of security required. For a small
                    home, 2–4 cameras may suffice, while large commercial
                    properties may require dozens.
                  </div>
                  <div
                    className="accordion-section-title"
                    data-tab="#accordion-a3"
                  >
                    Can I use CCTV cameras at night?
                  </div>
                  <div className="accordion-section-content" id="accordion-a3">
                    Yes, many CCTV cameras come equipped with infrared (IR) LEDs
                    for night vision, allowing them to capture footage even in
                    complete darkness.
                  </div>
                  <div
                    className="accordion-section-title"
                    data-tab="#accordion-a4"
                  >
                    What is motion detection in CCTV cameras?
                  </div>
                  <div className="accordion-section-content" id="accordion-a4">
                    Motion detection triggers the camera to start recording or
                    send an alert when movement is detected. This feature helps
                    save storage space and makes it easier to review important
                    events.
                  </div>
                  <div
                    className="accordion-section-title"
                    data-tab="#accordion-a5"
                  >
                    Is there maintenance required for CCTV systems?
                  </div>
                  <div className="accordion-section-content" id="accordion-a5">
                    Yes, periodic maintenance includes cleaning camera lenses,
                    ensuring connections are secure, checking for firmware
                    updates, and ensuring the recording devices are functioning
                    properly. Regular maintenance helps ensure reliable
                    performance.
                  </div>
                  <div
                    className="accordion-section-title"
                    data-tab="#accordion-a6"
                  >
                    Are CCTV cameras weatherproof?
                  </div>
                  <div className="accordion-section-content" id="accordion-a6">
                    Many CCTV cameras are designed to be weatherproof and can be
                    installed outdoors. Look for cameras with an IP66 or IP67
                    rating, which means they are resistant to dust and water.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
 }


 export default Querys;