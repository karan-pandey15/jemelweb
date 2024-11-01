import React from "react";
import Image from "next/image";    
import cat1 from "../../../../public/images/img-1.png"
import cat2 from "../../../../public/images/img-2.png"
import cat3 from "../../../../public/images/img-3.png"
import cat4 from "../../../../public/images/img-5.png" 
import Link from "next/link";
import "./Categofystyle.css"; 

const Category = () => {
  return (
    <>
      <section style={{ backgroundColor: "#fff"  }}>
      <h1 className="four_heading_div">Explore by Category</h1>
      <div className="four_div_container"><div className="round_container">
  <Link href="/pages/earringsdisplay"> 
    <Image
      src={cat1}
      className="round_contaner_img"
      alt="Earrings"
    />
    <p className="txt_container">Earrings</p>
  </Link>
</div>

<div className="round_container">
  <Link href="/pages/earringsdisplay"> 
    <Image
      src={cat2}
      className="round_contaner_img"
      alt="Earrings"
    />
    <p className="txt_container">TopRings</p>
  </Link>
</div>

<div className="round_container">
  <Link href="/pages/necklacedisplay">
    <Image
      src={cat3}
      className="round_contaner_img"
      alt="Necklace"
    />
    <p className="txt_container">Necklace</p>
  </Link>
</div>

<div className="round_container">
  <Link href="/pages/braceletdisplay">
    <Image
      src={cat4}
      className="round_contaner_img"
      alt="Bracelet"
    />
    <p className="txt_container">Bracelet</p>
  </Link>
</div>

<div className="round_container">
  <Link href="/pages/earringsdisplay"> 
    <Image
      src={cat1}
      className="round_contaner_img"
      alt="Earrings"
    />
    <p className="txt_container">Earrings</p>
  </Link>
</div>

<div className="round_container">
  <Link href="/pages/necklacedisplay">
    <Image
      src={cat2}
      className="round_contaner_img"
      alt="Necklace"
    />
    <p className="txt_container">Necklace</p>
  </Link>
</div> 
      </div> 
    </section>  
    </>
  );
};

export default Category;



 