'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/navbar/page';
import Footer from '@/app/components/footer/page';
import { useDispatch } from 'react-redux';
import { add } from '@/Redux/Cartslice';
import { toast } from 'react-toastify'; 
import firstImg from "../../../../../public/images/images/1.jpg"
import secondImg from "../../../../../public/images/images/20.jpg";
import thirdImg from "../../../../../public/images/images/21.jpg";
import fourthImg from "../../../../../public/images/images/25.jpg";
import fifthImg from "../../../../../public/images/images/26.jpg";
import sixhImg from "../../../../../public/images/images/27.jpg";
import sevenImg from "../../../../../public/images/images/28.jpg";
import eigthtImg from "../../../../../public/images/images/29.jpg";
import nineImg from "../../../../../public/images/images/30.jpg";
import tenImg from "../../../../../public/images/images/32.jpg";

// Named export for productData
export const productData = [
  {
    id: 1,
    name: 'Zirconia Studded Blue',
    description: 'Elegant zirconia-studded blue ring',
    price: '₹3000',
    images: [firstImg, firstImg], // Added the new image paths
  },
  {
    id: 2,
    name: 'Gold Plated Cubic Zirconia',
    description: 'Classic gold-plated cubic zirconia',
    price: '₹2000',
    images: [secondImg, secondImg], // Added the new image paths
  },
  {
    id: 3,
    name: 'Studded Sapphire Blue',
    description: 'Gorgeous studded sapphire blue necklace',
    price: '₹5000',
    images: [thirdImg, thirdImg], // Added the new image paths
  },
  {
    id: 4,
    name: 'Gold Plated Cubic Zirconia',
    description: 'Gold-plated ring with cubic zirconia',
    price: '₹3000',
    images: [fourthImg, fourthImg], // Added the new image paths
  },
  {
    id: 5,
    name: 'Zirconia Studded Blue',
    description: 'Beautiful zirconia-studded blue ring',
    price: '₹3000',
    images: [fifthImg, fifthImg], // Added the new image paths
  },
  {
    id: 6,
    name: 'Gold Plated Cubic Zirconia',
    description: 'Gold-plated cubic zirconia earring',
    price: '₹2000',
    images: [sixhImg, sixhImg], // Added the new image paths
  },
  {
    id: 7,
    name: 'Studded Sapphire Blue',
    description: 'Studded sapphire blue bracelet',
    price: '₹5000',
    images: [sevenImg, sevenImg], // Added the new image paths
  },
  {
    id: 8,
    name: 'Gold Plated Cubic Zirconia',
    description: 'Gold-plated, zirconia-studded jewelry',
    price: '₹3000',
    images: [eigthtImg, eigthtImg], // Added the new image paths
  },
  {
    id: 9,
    name: 'Studded Sapphire Blue',
    description: 'Elegant studded sapphire blue jewelry',
    price: '₹5000',
    images: [nineImg, nineImg], // Added the new image paths
  },
  {
    id: 10,
    name: 'Gold Plated Cubic Zirconia',
    description: 'Gold-plated cubic zirconia piece',
    price: '₹3000',
    images: [tenImg, tenImg], // Added the new image paths
  },
];

export default function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [displayedImage, setDisplayedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  // Function to select a product when an image is clicked
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setDisplayedImage(product.images[0]);
  };

  // Wishlist function
  const handleAddToWishlist = () => {
    dispatch(add({ ...selectedProduct, quantity: 1 }));
    toast('Added to Wishlist', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      style: { backgroundColor: '#964B00', color: 'white', fontWeight: 'bold' },
    });
  };

  return (
    <div>
      <Navbar />

      <div style={{ marginTop: '100px' }}>
        {!selectedProduct ? (
          <div className="product_list_container">
            {productData.map((product) => (
              <div key={product.id} onClick={() => handleProductClick(product)} className="product_card">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="product_image"
                  style={{ objectFit: 'cover', cursor: 'pointer' }}
                />
                <h2>{product.name}</h2>
                <p>₹{product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="product_detail_container">
            <div className="all_img_container">
              <Image
                src={displayedImage}
                alt={selectedProduct.name}
                width={500}
                height={500}
                onClick={() => setIsModalOpen(true)}
                style={{ objectFit: 'cover', cursor: 'pointer' }}
              />
              <div className="additional_images">
                {selectedProduct.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`${selectedProduct.name} - ${index + 1}`}
                    width={80}
                    height={100}
                    onClick={() => setDisplayedImage(image)}
                    className="thumbnail_image"
                    style={{ objectFit: 'cover', cursor: 'pointer' }}
                  />
                ))}
              </div>
            </div>
            <div className="content_container">
              <h2 className="product_heading">{selectedProduct.name}</h2>
              <p className="description">{selectedProduct.description}</p>
              <p className="price">₹{selectedProduct.price}</p>
              <button className="prodcut_button" onClick={handleAddToWishlist}>Add To Wishlist</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal_content">
            <span className="close_button" onClick={() => setIsModalOpen(false)}>&times;</span>
            <Image
              src={displayedImage}
              alt={selectedProduct.name}
              width={800}
              height={800}
              className="modal_image"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      )}
      <style jsx>{`
        .product_list_container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          padding: 20px;
        }
        .product_card {
          text-align: center;
          cursor: pointer;
          width: 200px;
        }
        .product_image {
          border-radius: 8px;
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .product_detail_container {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          margin: 40px;
        }
        .all_img_container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 20px;
        }
        .additional_images {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }
        .thumbnail_image {
          width: 80px;
          height: 100px;
          object-fit: cover;
          cursor: pointer;
        }
        .content_container {
          max-width: 400px;
          text-align: center;
        }
        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 1000;
        }
        .modal_content {
          position: relative;
          max-width: 80%;
          max-height: 80%;
        }
        .close_button {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 30px;
          cursor: pointer;
          color: white;
        }
      `}</style>
    </div>
  );
}
