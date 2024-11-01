 
"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaUser, FaHeart, FaCartArrowDown } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import axios from "axios";
import { IoIosLogOut } from "react-icons/io";
import "./navbar.css";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopSubMenuOpen, setIsShopSubMenuOpen] = useState(false);
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleShopMouseEnter = () => {
    setIsShopSubMenuOpen(true);
  };

  const handleShopMouseLeave = () => {
    setIsShopSubMenuOpen(false);
  };

  const [user, setUser] = useState(null);

  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    axios
      .post("https://api.keeva.in/api/logout-user")
      .then((response) => {
        if (response.data.Status === "Success") {
          localStorage.clear();
          router.push("/pages/signin");
        }
      })
      .catch((error) =>
        console.error("Error occurred while logging out user: " + error)
      );
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://api.keeva.in/api/user-data");
        setUser(response.data.Data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <header className="flex justify-center w-full navbar_sticky topnav_fixed">
        <nav className="flex justify-between items-center w-[95%] py-4">
          <div>
            <Link   href="/" className="font-bold text-2xl navbaricon ">
              JEMEL
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <ul className="flex items-center">
              <li>
                <Link
                  href="/"
                  className="mx-2 lg:mx-5 uppercase text-[14px] lg:text-base tracking-[.15em] font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/about"
                  className="mx-2 lg:mx-5 uppercase text-[14px] lg:text-base tracking-[.15em] font-medium"
                >
                  About
                </Link>
              </li>
              <li
                onMouseEnter={handleShopMouseEnter}
                onMouseLeave={handleShopMouseLeave}
              >
                <Link
                  href="#"
                  className="flex items-center mx-2 lg:mx-5 uppercase text-[14px] lg:text-base tracking-[.15em] font-medium"
                >
                  Shop
                  <MdKeyboardArrowDown className="text-lg mt-[2px]" />
                </Link>
                {isShopSubMenuOpen && (
                  <div
                    className="absolute bg-white p-4 pages_submenu"
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                      backgroundColor: "#FCF7EE",
                    }}
                  >
                    <ul className="pages_submenu_items">
                      <li className="py-2">
                        <Link href="/pages/necklaces">Necklaces</Link>
                      </li>
                      <li className="py-2">
                        <Link href="/pages/rings">Rings</Link>
                      </li>
                      <li className="py-2">
                        <Link href="/pages/bracelets">Bracelets</Link>
                      </li>
                      <li className="py-2">
                        <Link href="/pages/earrings">Earrings</Link>
                      </li>
                      <li className="py-2">
                        <Link href="/pages/watches">Watches</Link>
                      </li>
                      <li className="py-2">
                        <Link href="/pages/collections">Collections</Link>
                      </li>
                      <li className="py-2">
                        <Link href="/pages/productform">Add Product</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="#"
                  className="mx-2 lg:mx-5 uppercase text-[14px] lg:text-base tracking-[.15em] font-medium"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <ul style={{ color: "#E19094" }} className="flex items-center">
            <div className="px-3">
              {user ? (
                <div style={{ color: "#E19094" }} className="flex items-center text-white text-sm">
                  Hello, <span>{user.username}</span>
                  <button
                    style={{ color: "#E19094" }}
                    type="button"
                    className="text-white text-2xl font-bold px-1"
                    title="Logout"
                    onClick={handleLogout}
                  >
                    <IoIosLogOut />
                  </button>
                </div>
              ) : (
                <span style={{ color: "#E19094" }} className="text-white text-sm">
                  Hello, <Link href="/pages/signin">Sign in</Link>
                </span>
              )}
            </div>
            <span className="text-white text-lg">
              <Link style={{ color: "#E19094" }} href="/pages/carts" title="Cart">
                <FaCartArrowDown />
                {cartItems.length}
              </Link>
            </span>
            <li className="md:hidden mx-1">
              <Link href="#" onClick={toggleMenu}>
                <GiHamburgerMenu className="font-bold text-xl" />
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden fixed inset-0 bg-black bg-opacity-50 z-50`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`${
            isMenuOpen ? "right-0" : "-right-full"
          } md:hidden fixed h-full overflow-auto bg-white z-50 transition-transform duration-300 ease-in-out`}
          style={{
            width: "80vw",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <Link href="#" onClick={toggleMenu} className="absolute top-2 right-4">
            <ImCross className="font-bold text-xl" />
          </Link>
          <ul className="flex flex-col items-start pt-8">
            <li className="py-2">
              <Link href="/" className="mx-5">Home</Link>
            </li>
            <li className="py-2">
              <Link href="/pages/about" className="mx-5">About</Link>
            </li>
            <li onMouseEnter={handleShopMouseEnter} onMouseLeave={handleShopMouseLeave} className="py-2">
              <Link href="#" className="flex items-center mx-5">
                <span>Shop</span>
                <MdKeyboardArrowDown className="text-lg mt-1" />
              </Link>
              {isShopSubMenuOpen && (
                <div className="absolute bg-white p-4 w-full" style={{ backgroundColor: "#FCF7EE" }}>
                  <ul>
                    <li className="py-2"><Link href="/pages/necklaces">Necklaces</Link></li>
                    <li className="py-2"><Link href="/pages/rings">Rings</Link></li>
                    <li className="py-2"><Link href="/pages/bracelets">Bracelets</Link></li>
                    <li className="py-2"><Link href="/pages/earrings">Earrings</Link></li>
                    <li className="py-2"><Link href="/pages/watches">Watches</Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li className="py-2">
              <Link href="#" className="mx-5">Blog</Link>
            </li>
            <li className="py-2">
              <Link href="/pages/termscond" className="mx-5">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
