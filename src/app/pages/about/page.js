
import React from "react";
import Image from "next/image"; 
import "./Aboutpagestyle.css"

import firstImg from "../../../../public/images/sofa.jpeg";
import secondImg from "../../../../public/images/sofa1.avif";
import thirdImg from "../../../../public/images/table.avif";
import fourthImg from "../../../../public/images/table.avif"; 
import Navbar from "@/app/components/navbar/page";
import Footer from "@/app/components/footer/page";

const About = () => {

    return (
        <>
        <div style={{ backgroundColor: '#fff' }} >
            <Navbar />
            <div className="aboutmain_container" >
                <div className="aboutcontent_container" >
                    <h1>About Us</h1>
                    <p className="acoutcontent_paratwo">Keeva.in is an online store where you can browse through images of various furnture designs. When you find something upu like, you can place and order, and we wll custom make that piece of furniture for you.</p>
                    <p className="acoutcontent_paratwo">
                        we only server in <span style={{color:"blue",fontWeight:"bold"}}>Bela Pratapgarh     </span> with custom made furniture designed just for you. we will handcraft your furniture right here in pratapgarh with the finest materials. 
                            support local Craftmanship and furnish your home with uniqe, quality pieces made by your neighborus.
                     
                    </p>
                    

                    <p className="paraborder" ></p>
                    <div className="three_content_container" >
                        <span className="paracontent_two"  >  Enjoying Exploring and createing your perfect furniture  </span>
                    </div>
                </div>
                <div className="aboutimage_container"  >
                    <Image className="about_pageimage" src={firstImg} alt="img"/>
                </div>
            </div>



            <div className="aboutmain_container" >
                <div className="second_aboutimage_container"  >
                    <Image className="about_page_secimage" src={secondImg} alt="img" />
                    <Image className="about_page_secimage" src={thirdImg}  alt="img" />

                </div>
                <div className="aboutcontent_container" >
                    <h1>Berefits of Choosing KEEVA.in</h1>
                    <h2 className="secondheading" >Competitive Prices</h2>
                    <h2 className="secondheading" >Experience Carpenters</h2>
                    <h2 className="secondheading" >10 Years Warranty on Products</h2>
                    <h2 className="secondheading" >Use of Finest materials in your furniture </h2>
                    <h2 className="secondheading" >More tha 100 designs of any products</h2>
                    <h2 className="secondheading" >You are supporting Local Carpenters</h2>
                </div>
            </div>


            <div className="aboutmain_container" >
                <div className="aboutcontent_container" > 
                    <p className="acoutcontent_paratwo">
                      If you want to make furniture with a well experience Carpenter then this place is defnitely for you. We are in contact with one of the best carpenters in
                      <span style={{color:"blue",fontWeight:"bold"}}>Bela Pratapgarh Uttar Pradesh 230001</span>. They have experience of 10+ years in this field
                    </p>
                </div>
            </div>
        </div>
        
        
        <p style={{textAlign:'center',marginTop:50,marginBottom:10}} ></p>
        
            <h2 style={{textAlign:'center',fontSize:25,fontWeight:'bold'}} >Work Done By Them</h2>
            
        <div className="our_team_container" >
            <div className="our_team_content_container" >
                <Image className="our_teamcontainner_img" src={fourthImg} alt="img" /> 
            </div>

            <div className="our_team_content_container" >
                <Image className="our_teamcontainner_img" src={firstImg} alt="img" /> 
            </div>
            
            <div className="our_team_content_container" >
                <Image className="our_teamcontainner_img" src={thirdImg} alt="img"/> 
            </div>
            

            <div className="our_team_content_container" >
                <Image className="our_teamcontainner_img" src={fourthImg} alt="img" /> 
            </div>
            <div style={{margin:'40px'}} > 
                    <p style={{fontSize:'20px'}}>
                      How can you know that this carpenters can make your Modular Kitchen as you want. You Will defnitely find difficult but 
                      we can make this easy we told earlier we have one of the best carpenters So, Don't waste your time is searching Carpenters 
                    </p>
                    <h1 style={{textAlign:'center',color:"black",margin:'25px',fontSize:'30px'}} >Call us now <span style={{color:"blue",fontWeight:'bold'}} >  7275759000</span></h1>
                      
                </div>
        </div>
        <Footer />
        </>
        
    );
};

export default About;

 