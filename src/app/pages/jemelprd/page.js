 
// // Addtocart.js
// import Image from "next/image";
// import "./Addtocart.css";
// import firstImg from "../../../../public/images/images/1.jpg";
// import secondImg from "../../../../public/images/images/20.jpg";
// import thirdImg from "../../../../public/images/images/21.jpg";
// import fourthImg from "../../../../public/images/images/25.jpg";
// import fifthImg from "../../../../public/images/images/26.jpg";
// import sixhImg from "../../../../public/images/images/27.jpg";
// import sevenImg from "../../../../public/images/images/28.jpg";
// import eigthtImg from "../../../../public/images/images/29.jpg";
// import nineImg from "../../../../public/images/images/30.jpg";
// import tenImg from "../../../../public/images/images/32.jpg";

// const Addtocart = () => {
//   const items = [
//     { id: 1, image: firstImg, heading: "Zirconia Studded Blue", price: "₹3000" },
//     { id: 2, image: secondImg, heading: "Gold Plated Cubic Zirconia", price: "₹2000" },
//     { id: 3, image: thirdImg, heading: "Studded Sapphire Blue", price: "₹5000" },
//     { id: 4, image: fourthImg, heading: "Gold Plated Cubic Zirconia", price: "₹3000" },
//     { id: 5, image: fifthImg, heading: "Zirconia Studded Blue", price: "₹3000" },
//     { id: 6, image: sixhImg, heading: "Gold Plated Cubic Zirconia", price: "₹2000" },
//     { id: 7, image: sevenImg, heading: "Studded Sapphire Blue", price: "₹5000" },
//     { id: 8, image: eigthtImg, heading: "Gold Plated Cubic Zirconia", price: "₹3000" },
//     { id: 9, image: nineImg, heading: "Studded Sapphire Blue", price: "₹5000" },
//     { id: 10, image: tenImg, heading: "Gold Plated Cubic Zirconia", price: "₹3000" },
//   ];

//   return (
//     <div className="add_cart_container">
//       <div className="add_cart_inner_container">
//         {items.map((item) => (
//           <div key={item.id} className="add_cart_main_container">
//             <div className="add_cart_image">
//               <Image src={item.image} alt={item.heading} className="product-image" />
//             </div>
//             <div className="add_cart_text">
//               <p className="cart_heading">{item.heading}</p>
//               <p className="cart_price">{item.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Addtocart;


import Image from "next/image";
import Link from "next/link";
import "./Addtocart.css";
import firstImg from "../../../../public/images/images/1.jpg";
import secondImg from "../../../../public/images/images/20.jpg";
import thirdImg from "../../../../public/images/images/21.jpg";
import fourthImg from "../../../../public/images/images/25.jpg";
import fifthImg from "../../../../public/images/images/26.jpg";
import sixhImg from "../../../../public/images/images/27.jpg";
import sevenImg from "../../../../public/images/images/28.jpg";
import eigthtImg from "../../../../public/images/images/29.jpg";
import nineImg from "../../../../public/images/images/30.jpg";
import tenImg from "../../../../public/images/images/32.jpg";

const Addtocart = () => {
  const items = [
    { id: 1, image: firstImg, heading: "Zirconia Studded Blue", price: "₹3000", description: "Elegant zirconia-studded blue ring" },
    { id: 2, image: secondImg, heading: "Gold Plated Cubic Zirconia", price: "₹2000", description: "Classic gold-plated cubic zirconia" },
    { id: 3, image: thirdImg, heading: "Studded Sapphire Blue", price: "₹5000", description: "Gorgeous studded sapphire blue necklace" },
    { id: 4, image: fourthImg, heading: "Gold Plated Cubic Zirconia", price: "₹3000", description: "Gold-plated ring with cubic zirconia" },
    { id: 5, image: fifthImg, heading: "Zirconia Studded Blue", price: "₹3000", description: "Beautiful zirconia-studded blue ring" },
    { id: 6, image: sixhImg, heading: "Gold Plated Cubic Zirconia", price: "₹2000", description: "Gold-plated cubic zirconia earring" },
    { id: 7, image: sevenImg, heading: "Studded Sapphire Blue", price: "₹5000", description: "Studded sapphire blue bracelet" },
    { id: 8, image: eigthtImg, heading: "Gold Plated Cubic Zirconia", price: "₹3000", description: "Gold-plated, zirconia-studded jewelry" },
    { id: 9, image: nineImg, heading: "Studded Sapphire Blue", price: "₹5000", description: "Elegant studded sapphire blue jewelry" },
    { id: 10, image: tenImg, heading: "Gold Plated Cubic Zirconia", price: "₹3000", description: "Gold-plated cubic zirconia piece" },
  ];

  return (
    <div className="add_cart_container">
      <div className="add_cart_inner_container">
        {items.map((item) => (
          <Link href={`/components/product/${item.id}`} key={item.id} passHref>
            <div className="add_cart_main_container">
              <div className="add_cart_image">
                <Image src={item.image} alt={item.heading} className="product-image" />
              </div>
              <div className="add_cart_text">
                <p className="cart_heading">{item.heading}</p>
                <p className="cart_price">{item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Addtocart;
