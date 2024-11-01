'use client'
import React from "react";
import Image from "next/image";   
import cat1 from "../../../../public/images/bed9.jpg"
import cat2 from "../../../../public/images/Sofaimage.jpeg"
import cat3 from "../../../../public/images/Tableimage.jpeg"
import cat4 from "../../../../public/images/Chairimage.jpeg"
import cat5 from "../../../../public/images/Windowimage.jpeg"
import cat6 from "../../../../public/images/Modularkitchenimage.jpeg"  
import Doorimage from "../../../../public/images/DoorImage.jpeg"
import Templeimage from "../../../../public/images/Templeimage.jpeg" 
import Deewaanimage from "../../../../public/images/Deewaanimage.jpeg"
import Kafsarimage from "../../../../public/images/Kafsarimage.jpeg" 
import Wardrobeimage from "../../../../public/images/Wardrobeimage.jpeg" 
import Podiumimage from "../../../../public/images/Podiumimage.jpeg"
import Shoerackimage from "../../../../public/images/Shoerackimage.jpeg"  
import Stoolimage from "../../../../public/images/Stoolimage.jpeg" 

import dressingtable from "../../../../public/images/dressingtable.jpg"
import Counterimage from "../../../../public/images/Counterimage.jpg"
 
import Takhtaimage from "../../../../public/images/Takhtaimage.jpg"

 
import Link from "next/link";
import "./Categofystyle.css"; 
import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";

const Category = () => {
  return (
    <>
    <Navbar />
    <section style={{ backgroundColor: "#fff", marginTop:'100px' }}>
      <h1 className="four_heading_div">Explore by Category</h1>
      <div className="four_div_container">
        <div className="round_container">
          <Link href="/pages/beddisplay"> 
              <Image
                src={cat1}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Bed</p>
   
          </Link>
        </div>

        <div className="round_container">
          <Link href="/pages/sofadisplay">
        
              <Image
                src={cat2}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Sofa</p>
          
          </Link>
        </div>

        <div className="round_container">
          <Link href="/pages/tabledisplay">
      
              <Image
                src={cat3}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Table</p>
    
          </Link>
        </div>

        <div className="round_container">
          <Link href="/pages/chairdisplay">
        
              <Image
                src={cat4}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Chair</p>
    
          </Link>
        </div>

        
        <div className="round_container">
          <Link href="/pages/kafsardisplay">
      
              <Image
                src={Kafsarimage}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Kafsar</p>
    
          </Link>
        </div>

        <div className="round_container">
          <Link href="/pages/wardrobe">
        
              <Image
                src={Wardrobeimage}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Wardrobe</p>
    
          </Link>
        </div>

        
        <div className="round_container">
          <Link href="/pages/kitchendisplay">
      
              <Image
                src={cat6}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Kitchen</p>
    
          </Link>
        </div>

        <div className="round_container">
          <Link href="/pages/windowdisplay">
        
              <Image
                src={cat5}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Window</p>
    
          </Link>
        </div>
 

        <div className="round_container">
          <Link href="/pages/pillingdisplay">
        
              <Image
                src={cat2}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Piling</p>
          
          </Link>
        </div>

        <div className="round_container">
          <Link href="/pages/doordisplay">
      
              <Image
                src={Doorimage}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Door</p>
    
          </Link>
        </div>

        <div className="round_container">
          <Link href="/pages/mandirdisplay">
        
              <Image
                src={Templeimage}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Mandir</p>
    
          </Link>
        </div>

        
        <div className="round_container">
          <Link href="/pages/counterisplay">
      
              <Image
                src={Counterimage}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Counter</p> 
          </Link>
        </div>
 
        <div className="round_container">
          <Link href="/pages/deewandisplay">
        
              <Image
                src={Deewaanimage}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Deewan</p>
    
          </Link>
        </div>

        
        <div className="round_container">
          <Link href="/pages/podiumdisplay">
      
              <Image
                src={Podiumimage}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Podium</p>
    
          </Link>
        </div>

        <div className="round_container">
          <Link href="/pages/dressingtabledisplay">
        
              <Image
                src={dressingtable}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Dressing Table</p>
    
          </Link>
        </div>


        <div className="round_container">
          <Link href="/pages/shoerackdisplay">
        
              <Image
                src={Shoerackimage}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Shoe Rack</p>
    
          </Link>
        </div>


        <div className="round_container">
          <Link href="/pages/stooldisplay">
        
              <Image
                src={Stoolimage}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Stool</p>
    
          </Link>
        </div>


    


        <div className="round_container">
          <Link href="/pages/takhtadisplay">
        
              <Image
                src={Takhtaimage}
                className="round_contaner_img"
                alt="img"
              />
              <p className="txt_container">Takhta</p>
    
          </Link>
        </div>


 
  
 

      </div>

    </section> 
    <Footer />
    </>
  );
};

export default Category;



 