import Image from "next/image";
import "./Cart.css";
import firstImg from "../../../../public/images/jemelproduct.jpg";
import secondImg from "../../../../public/images/jemelproduct2.webp";
import thirdImg from "../../../../public/images/jemelproduct3.jpg";
import fourthImg from "../../../../public/images/jemelproduct4.jpg";

const CartPage = () => {
  // Sample data array containing items
  const items = [
    {
      id: 1,
      image: firstImg,
      heading: " Zirconia Studded Sapphire Blue.",
      price: "$5.00 - $10.00",
    },
    {
      id: 2,
      image: secondImg,
      heading: "Gold Plated Cubic Zirconia",
      price: "$5.00 - $10.00",
    },
    {
      id: 3,
      image: thirdImg,
      heading: "Studded Sapphire Blue. curk",
      price: "$5.00 - $10.00",
    },
    {
      id: 4,
      image: fourthImg,
      heading: "Gold Plated Cubic Zirconia",
      price: "$5.00 - $10.00",
    },
    // Add more items here if needed
  ];

  return (
    <div className="cart_container">
      <div className="cart_inner_container">
        {items.map((item) => (
          <div key={item.id} className="cart_main_container">
            <div className="cart_image">
              <Image src={item.image} alt="photoImage" />
            </div>
            <div className="cart_test">
              <p className="cart_heading">{item.heading}</p>
              <div className="rating">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star-empty">&#9733;</span>
              </div>
              <p style={{ textAlign: "center", fontSize: "12px" }}>
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
