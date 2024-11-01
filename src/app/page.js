 
 "use client"
import Category from "./components/Category/page";
import Banner1 from "./components/homepage/page";
import Footer from "./components/footer/page"; 
import Navbar from "./components/navbar/page";     
import FifthBanner from "./pages/fifthbanner/page";
import Addtocart from "./pages/jemelprd/page";
import "./globals.css"
export default function Home() {
  return (
    <main>   
      <div>
        <Navbar />
      </div>
    
      <div>
      <Banner1 />
      </div> 
      <div>
        <Category />
      </div> 
      <div>
      <Addtocart />
      </div>
      <div>
      <FifthBanner />
      </div>
      <div>
        <Footer />
      </div>
    </main> 
  );
}
