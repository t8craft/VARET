import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';

const Accordion5 = ({ handleClick }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeChild, setActiveChild] = useState({
    parentIndex: null,
    childIndex: null,
  });
  const [bouncingChild, setBouncingChild] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleChildClick = (parentIndex, childIndex, variant) => {
    console.log("bouncing!"); // ✅ Debug message

    setActiveChild({ parentIndex, childIndex });
    setBouncingChild({ parentIndex, childIndex });

    if (handleClick) {
      handleClick(variant);
    }

    // Remove bounce effect after animation ends
    setTimeout(() => {
      setBouncingChild(null);
    }, 500); // Match your bounce-right animation duration
  };

  const menuItems = [
    {
      title: "User Management",
      icon: <HomeIcon />,
      children: [
        { name: "Create User", variant: "Create User" },
        { name: "Maintain User", variant: "Maintain User" },
      ],
    },
    {
      title: "Stock Management",
      icon: <HomeIcon />,
      children: [
        { name: "Add Stock", variant: "Add Stock" },
        { name: "Maintain Stock", variant: "Maintain Stock" },
      ],
    },
    {
      title: "Reports",
      icon: <HomeIcon />,
      children: [
        { name: "Sales Reports", variant: "Sales Reports" },
        { name: "User Activity", variant: "User Activity" },
      ],
    },
  ];

  return (
    <div className="w-full mx-auto mt-10">
      {menuItems.map((menu, index) => (
        <div key={index} className="mb-2">
          {/* Parent Menu Item */}
          <button
            onClick={() => toggleMenu(index)}
            className={`w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none flex items-center ${
              openMenu === index ? "bg-blue-600" : "bg-blue-500"
            }`}
          >
            <div className="mr-2 -mt-0.5">{menu.icon}</div>
            {menu.title}
          </button>

          {/* Child Menu Items */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openMenu === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {menu.children.map((child, childIndex) => (
              <div key={childIndex} className="px-6 text-gray-500 mt-1">
                <button
                  onClick={() =>
                    handleChildClick(index, childIndex, child.variant)
                  }
                  className={`w-full text-left px-2 py-1 border-l-2 ${
                    activeChild.parentIndex === index &&
                    activeChild.childIndex === childIndex
                      ? "text-blue-500 border-blue-500"
                      : "text-gray-600 border-transparent hover:text-blue-400 hover:border-blue-400"
                  }`}
                >
                  <span
                    className={`inline-block transition-transform duration-300 ${
                      bouncingChild?.parentIndex === index &&
                      bouncingChild?.childIndex === childIndex
                        ? "bounce-right"
                        : ""
                    }`}
                  >
                    {child.name}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion5;



// import React, { useState } from "react";
// import HomeIcon from '@mui/icons-material/Home';




// const Accordion5 = ({ handleClick }) => {
//   const [openMenu, setOpenMenu] = useState(null);
//   const [activeChild, setActiveChild] = useState({
//     parentIndex: null,
//     childIndex: null,
//   });
//   const [bouncingChild, setBouncingChild] = useState(null);

//   const toggleMenu = (index) => {
//     setOpenMenu(openMenu === index ? null : index);
//   };

//   const handleChildClick = (parentIndex, childIndex, variant) => {

//     console.log("bouncing!"); // ✅ Debug message

//     setActiveChild({ parentIndex, childIndex });
//     setBouncingChild({ parentIndex, childIndex });

//     // Call handleClick with the variant
//     if (handleClick) {
//       handleClick(variant);
//     }

//     // Remove bounce effect after animation ends
//     setTimeout(() => {
//       setBouncingChild(null);
//     }, 300); // Match the animation duration
//   };

//   // Menu items with dynamic icons and child properties
//   const menuItems = [
//     {
//       title: "User Management",
//       icon: <HomeIcon />,
//       children: [
//         { name: "Create User", variant: "Create User" },
//         { name: "Maintain User", variant: "Maintain User" },
//       ],
//     },
//     {
//       title: "Stock Management",
//       icon: <HomeIcon />,
//       children: [
//         { name: "Add Stock", variant: "Add Stock" },
//         { name: "Maintain Stock", variant: "Maintain Stock" },
//       ],
//     },
//     {
//       title: "Reports",
//       icon: <HomeIcon />,
//       children: [
//         { name: "Sales Reports", variant: "Sales Reports" },
//         { name: "User Activity", variant: "User Activity" },
//       ],
//     },
//   ];

//   return (
//     <div className="w-full mx-auto mt-10">
//       {menuItems.map((menu, index) => (
//         <div key={index} className="mb-2">
//           {/* Parent Menu Item */}
//           <button
//             onClick={() => toggleMenu(index)}
//             className={`w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none flex items-center ${
//               openMenu === index ? "bg-blue-600" : "bg-blue-500"
//             }`}
//           >
//             <div className="mr-2 -mt-0.5">{menu.icon}</div>
//             {menu.title}
//           </button>

//           {/* Child Menu Items */}
//           <div
//             className={`overflow-hidden transition-all duration-300 ease-in-out ${
//               openMenu === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
//             }`}
//           >
//             {menu.children.map((child, childIndex) => (
//               <div
//                 key={childIndex}
//                 className="px-6  text-gray-500 mt-1"
//               >
//                 <button
//                   onClick={() =>
//                     handleChildClick(index, childIndex, child.variant)
//                   }
//                   className={`w-full text-left px-2 py-1 border-l-2 ${
//                     activeChild.parentIndex === index &&
//                     activeChild.childIndex === childIndex
//                       ? "text-blue-500 border-blue-500"
//                       : "text-gray-600 border-transparent hover:text-blue-400 hover:border-blue-400"
//                   }`}
//                 >
//                   <span
//                     className={`inline-block transition-transform duration-300 ${
//                       bouncingChild?.parentIndex === index &&
//                       bouncingChild?.childIndex === childIndex
//                         ? "animate-bounce-right"
//                         : ""
//                     }`}
//                   >
//                     {child.name}
//                   </span>
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}


//       <div className="">

//       </div>


//     </div>
//   );
// };

// export default Accordion5;
