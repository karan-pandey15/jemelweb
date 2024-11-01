import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { AiOutlineWindows } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import "./footerstyle.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div className="footer_main_container">
        <footer className="footer_container">
          <div className="footer_heading_container">
            <div className="">
              <h1 className="footer_main_heading">ZEMEL</h1>
              <p className="footer_main_para">
                Zemel is an online jewelry store where you can explore a stunning collection of handcrafted jewelry designs. When you find a piece you adore, you can place an order, and we will custom make that exquisite item just for you.
              </p>
            </div>
          </div>
          <div className="link_container">
            <h5
              style={{
                color: "#111",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              About
            </h5>
            <ul className="ul_link">
              <li className="">
                <Link href="#">
                  About Us
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  Privacy Policy
                </Link>
              </li>
              <li className=" ">
                <Link href="#">
                  Terms & Conditions
                </Link>
              </li>
              <li className=" ">
                <Link href="#">
                  Admin Sign In
                </Link>
              </li>
            </ul>
          </div>

          <div className="link_container">
            <h5
              style={{
                color: "#111",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              Shop
            </h5>
            <ul className="ul_link">
              <li className="">
                <Link href="#">
                  Earrings
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  Necklaces
                </Link>
              </li>
              <li className=" ">
                <Link href="#">
                  Bracelets
                </Link>
              </li>
              <li className=" ">
                <Link href="#">
                  Rings
                </Link>
              </li>
            </ul>
          </div>

          <div className="link_container">
            <h5
              style={{
                color: "#111",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              Additional Information
            </h5>
            <ul className="ul_link">
              <li className=" ">
                <Link href="#">
                  Cancellation & Refund
                </Link>
              </li>
              <li className=" ">
                <Link href="#">
                  Shipping & Delivery
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <div className="small_footer_main_container">
        <div className="small_footer_child_container">
          <Link href="#">
            <div className="small_container">
              <IoHomeOutline />
              <p className="small_footer_para">HOME</p>
            </div>
          </Link>

          <Link href="#">
            <div className="small_container">
              <AiOutlineWindows />
              <p className="small_footer_para">About</p>
            </div>
          </Link>

          <Link href="#">
            <div className="small_container">
              <BiCategory />
              <p className="small_footer_para">Category</p>
            </div>
          </Link>

          <Link href="#">
            <div className="small_container">
              <BsShop />
              <p className="small_footer_para">Shop</p>
            </div>
          </Link>

          <Link
            href="https://wa.me/9569125048"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="small_container">
              <FaWhatsapp />
              <p className="small_footer_para">Chat</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
