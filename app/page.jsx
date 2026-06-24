
import { Header, 
  Footer, 
  About, 
  Specialist,
  Choose,
  Testimonials, 
  Querys, 
  StayUpdate,
  Carousel} from "./components";


export default function Home(){
    return(
    <>
    <div id="wrapper">
      {/* Calling Header  */}
      <Header />
          
          <div className="no-bottom no-top" id="content">
            <div id="top" />

      {/* Calling carousel Section */}
          <Carousel />
          
      {/* Calling About Section */}
            
          <About />

      {/* Calling Specialist Section */}

          <Specialist />
      
      {/* Calling Choose Section  */}

          <Choose />
      
      {/* Calling Testimonials  */}

          <Testimonials />
      
      {/* Caling Querys   */}
      
          <Querys />
      
      {/* Calling Update Section */}
          
          <StayUpdate />
          </div>
        </div>
        
        <Footer />
</>

    );
}