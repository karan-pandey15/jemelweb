// "use client";
// import React, { useState } from "react";
// import "./banner1.css";

// const options = [
//   "Necklace",
//   "Earrings",
//   "Bracelet",
//   "Ring",
//   "Pendant",
//   "Jewelry Set",
//   "Bangles",
//   "Brooch",
//   "Anklet",
//   "Watches",
//   "Diamond Ring",
//   "Gold Chain",
//   "Silver Necklace",
//   "Pearl Earrings",
//   "Customized Jewelry",
//   "Birthstone Jewelry",
//   "Engagement Ring",
//   "Charm Bracelet",
//   "Hoop Earrings",
//   "Cufflinks",
//   "Jewelry Box"
// ];

// const Banner1 = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredOptions, setFilteredOptions] = useState([]);

//   const handleInputChange = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);
//     const filtered = options.filter((option) =>
//       option.toLowerCase().includes(term.toLowerCase())
//     );
//     setFilteredOptions(filtered);
//   };

//   const handleOptionClick = (option) => {
//     console.log("Navigating to", option);
//     // Here, you can navigate to the respective page using Next.js routing
//     switch (option) {
//       case "Necklace":
//         window.location.href = "/pages/necklacedisplay";
//         break;
//       case "Earrings":
//         window.location.href = "/pages/earringsdisplay";
//         break;
//       case "Bracelet":
//         window.location.href = "/pages/braceletdisplay";
//         break;
//       case "Ring":
//         window.location.href = "/pages/ringdisplay";
//         break;
//       case "Pendant":
//         window.location.href = "/pages/pendantdisplay";
//         break;
//       case "Jewelry Set":
//         window.location.href = "/pages/jewelrysetdisplay";
//         break;
//       case "Bangles":
//         window.location.href = "/pages/banglesdisplay";
//         break;
//       case "Brooch":
//         window.location.href = "/pages/broochdisplay";
//         break;
//       case "Anklet":
//         window.location.href = "/pages/ankletdisplay";
//         break;
//       case "Watches":
//         window.location.href = "/pages/watchesdisplay";
//         break;
//       case "Diamond Ring":
//         window.location.href = "/pages/diamondringdisplay";
//         break;
//       case "Gold Chain":
//         window.location.href = "/pages/goldchaindisplay";
//         break;
//       case "Silver Necklace":
//         window.location.href = "/pages/silvernecklacedisplay";
//         break;
//       case "Pearl Earrings":
//         window.location.href = "/pages/pearlearingsdisplay";
//         break;
//       case "Customized Jewelry":
//         window.location.href = "/pages/customizedjewelrydisplay";
//         break;
//       case "Birthstone Jewelry":
//         window.location.href = "/pages/birthstonejewelrydisplay";
//         break;
//       case "Engagement Ring":
//         window.location.href = "/pages/engagementringdisplay";
//         break;
//       case "Charm Bracelet":
//         window.location.href = "/pages/charmbraceletdisplay";
//         break;
//       case "Hoop Earrings":
//         window.location.href = "/pages/hoopearringsdisplay";
//         break;
//       case "Cufflinks":
//         window.location.href = "/pages/cufflinksdisplay";
//         break;
//       case "Jewelry Box":
//         window.location.href = "/pages/jewelryboxdisplay";
//         break;
//       default:
//         break;
//     }
//   };

//   const [backgroundImage, setBackgroundImage] = React.useState('');

//   // Function to update the background image based on screen size
//   const updateBackgroundImage = () => {
//     if (window.innerWidth <= 750) {
//       setBackgroundImage('/images/images/jemelbanner2.png'); // Background for small screens
//     } else {
//       setBackgroundImage('/images/images/jemelbgimg.png'); // Background for larger screens
//     }
//   };

//   // Update the background image on component mount and window resize
//   React.useEffect(() => {
//     updateBackgroundImage(); // Set the initial background image
//     window.addEventListener('resize', updateBackgroundImage); // Listen for window resize
//     return () => {
//       window.removeEventListener('resize', updateBackgroundImage); // Cleanup listener on unmount
//     };
//   }, []);

//   return (
//     <>
//       <div
//         className="h-screen bg-[#FFCDB2] md:bg-[#FFCDB2] bg-bottom bg-center md:bg-left md:pl-[150px] rounded-b-[30px] flex flex-col items-start justify-center smallhero_section"
//         style={{
//           backgroundImage: `url(${backgroundImage})`, // Set the dynamic background image
//           backgroundSize: 'cover', // Ensure the image covers the full area
//           backgroundRepeat: 'no-repeat', // Prevent tiling of the image
//         }}
//       >
//         <div className="max-w-[668px] space-y-[54px] flex flex-col p-4 md:p-0 text-center md:text-left">
//           <h1 className="font-[700] text-[36px] md:text-[64px] leading-[52px] md:leading-[85.31px] font-Playfair text-[#07484A] mt-[10rem] md:mt-0">
//             Exclusive Jewelry Collection
//           </h1>

//           <div>
//             <input
//               type="text"
//               placeholder="Search Jewelry..."
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
//               value={searchTerm}
//               onChange={handleInputChange}
//             />
//             {searchTerm && (
//               <ul>
//                 {filteredOptions.map((option) => (
//                   <li
//                     key={option}
//                     style={{ backgroundColor: "#fff" }}
//                     className="cursor-pointer py-2 px-4 hover:bg-gray-100"
//                     onClick={() => handleOptionClick(option)}
//                   >
//                     {option}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//           <p className="font-[400] text-[18px] md:text-[24px] leading-[23px] md:leading-[32.68px] font-OpenSans text-[#fff]">
//             Discover unique designs and find the perfect piece of jewelry.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Banner1;


"use client";
import React, { useState } from "react";
import "./banner1.css";

const options = [
  "Necklace",
  "Earrings",
  "Bracelet",
  "Ring",
  "Pendant",
  "Jewelry Set",
  "Bangles",
  "Brooch",
  "Anklet",
  "Watches",
  "Diamond Ring",
  "Gold Chain",
  "Silver Necklace",
  "Pearl Earrings",
  "Customized Jewelry",
  "Birthstone Jewelry",
  "Engagement Ring",
  "Charm Bracelet",
  "Hoop Earrings",
  "Cufflinks",
  "Jewelry Box"
];

const Banner1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionClick = (option) => {
    console.log("Navigating to", option);
    // Next.js routing
    const routes = {
      "Necklace": "/pages/necklacedisplay",
      "Earrings": "/pages/earringsdisplay",
      "Bracelet": "/pages/braceletdisplay",
      "Ring": "/pages/ringdisplay",
      "Pendant": "/pages/pendantdisplay",
      "Jewelry Set": "/pages/jewelrysetdisplay",
      "Bangles": "/pages/banglesdisplay",
      "Brooch": "/pages/broochdisplay",
      "Anklet": "/pages/ankletdisplay",
      "Watches": "/pages/watchesdisplay",
      "Diamond Ring": "/pages/diamondringdisplay",
      "Gold Chain": "/pages/goldchaindisplay",
      "Silver Necklace": "/pages/silvernecklacedisplay",
      "Pearl Earrings": "/pages/pearlearingsdisplay",
      "Customized Jewelry": "/pages/customizedjewelrydisplay",
      "Birthstone Jewelry": "/pages/birthstonejewelrydisplay",
      "Engagement Ring": "/pages/engagementringdisplay",
      "Charm Bracelet": "/pages/charmbraceletdisplay",
      "Hoop Earrings": "/pages/hoopearringsdisplay",
      "Cufflinks": "/pages/cufflinksdisplay",
      "Jewelry Box": "/pages/jewelryboxdisplay",
    };
    if (routes[option]) {
      window.location.href = routes[option];
    }
  };

  const [backgroundImage, setBackgroundImage] = React.useState('');

  const updateBackgroundImage = () => {
    if (window.innerWidth <= 750) {
      setBackgroundImage('/images/images/jemelbanner2.png'); // Background for small screens
    } else {
      setBackgroundImage('/images/images/jemelbgimg.png'); // Background for larger screens
    }
  };

  React.useEffect(() => {
    updateBackgroundImage(); // Set the initial background image
    window.addEventListener('resize', updateBackgroundImage); // Listen for window resize
    return () => {
      window.removeEventListener('resize', updateBackgroundImage); // Cleanup listener on unmount
    };
  }, []);

  return (
    <>
      <div
        className="firstContainer"
        style={{
          backgroundImage: `url(${backgroundImage})`, // Set the dynamic background image
          backgroundSize: 'cover', // Ensure the image covers the full area
          backgroundRepeat: 'no-repeat', // Prevent tiling of the image
        }}
      >
        <div className="max-w-[668px] space-y-[54px] flex flex-col p-4 md:p-0 text-center md:text-left">
          <h1 className="font-[700] text-[36px] md:text-[64px] leading-[52px] md:leading-[85.31px] font-Playfair text-[#07484A] mt-[10rem] md:mt-0">
            Exclusive Jewelry Collection
          </h1>

          <div>
            <input
              type="text"
              placeholder="Search Jewelry..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              value={searchTerm}
              onChange={handleInputChange}
            />
            {searchTerm && (
              <ul>
                {filteredOptions.map((option) => (
                  <li
                    key={option}
                    style={{ backgroundColor: "#fff" }}
                    className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p className="font-[400] text-[18px] md:text-[24px] leading-[23px] md:leading-[32.68px] font-OpenSans text-[#fff]">
            Discover unique designs and find the perfect piece of jewelry.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner1;
