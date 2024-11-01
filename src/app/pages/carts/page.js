 
 
// CartPage.js
'use client'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { remove } from '@/Redux/Cartslice';
import { setCart } from '@/Redux/Cartslice'; // Import setCart action
import "./CartStyle.css";
import Footer from '@/app/components/footer/page';
import Link from 'next/link';
import Navbar from '@/app/components/navbar/page';
import axios from 'axios';
import { toast } from 'react-toastify';


import { useRouter } from "next/navigation";
const CartPage = () => {
  const [auth,setAuth] = useState();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    axios
      .get("https://api.keeva.in/api/user-data")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
        } else {
          setAuth(false); 
          router.push("/pages/signin");
        }
      })
      .catch((err) => {
        console.log(err);
        router.push("/pages/signin");
      });
  }, [router]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch(setCart(JSON.parse(savedCart))); // Dispatch setCart action to set cart data
    }
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(remove(id));
    alert('Are You Sure want to remove this Product from Cart.')
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
 

  const checkout = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const response = await fetch('https://api.keeva.in/api/save-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user ,
          items: cart,
        }),
      });
      const data = await response.json();
      console.log(data);
      toast('Order Placed SuccessFully!', {
        position: "bottom-center",
        autoClose: 1000, // 1 second
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        style: {
          backgroundColor: '#007200',
          color: 'white',
          fontWeight: 'bold',
        },
      });
  
      // Dispatch action to clear cart after successful checkout
      dispatch(setCart([]));

      router.push("/pages/orderpage");
  
      // Handle success response
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };
  

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center py-20">
          <h2>Your cart is empty.</h2>
          <Link href='/'>
            <button
              className="bg-blue-500 text-white py-1 mx-4 px-3 rounded-md mt-2 hover:bg-red-600 duration-300"
            >
              GoTo Shop
            </button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }


  return (
    <>
      <Navbar />
      <div style={{ height: '100px' }}></div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col w-[90%] sm:w-[80%] py-8 cart-page-main_div">
          {cart.map((item) => (
            <div key={item._id} className="flex flex-col sm:flex-row justify-between items-center py-4 border-b border-gray-200">
              <div className="image-container">
                <Image
                  src={item.images[0]} // Assuming the first image is used
                  alt={item.name}
                  width={200}
                  height={200}
                  className="product-image"
                />
              </div>
              <div className="flex-1 px-4 text-container">
                <h2 className="text-xl font-medium">{item.name}</h2>
                <p className="text-gray-600">Description: {item.description}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-600">Unit Price: ₹{item.price}</p>
                <p className="text-gray-600">Total Price: ₹{item.price * item.quantity}</p>
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded-md mt-2 hover:bg-red-600 duration-300"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 mt-4 border-t border-gray-200 total-container">
            <h2 className="text-2xl font-medium">Total Price: ₹{totalPrice}</h2>
            <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 duration-300" onClick={checkout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
      <div style={{ height: '100px' }}></div>
      <Footer />
    </>
  );
};

export default CartPage;
