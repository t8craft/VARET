import React from "react";
import Grid from "./ProductGrid";

const SolarContainer = () => {
  return (
    <body className="bg-gray-100">
      {/* <!-- Outer Div --> */}
      <div className="relative bg-blue-100 min-h-screen flex">
        {/* <!-- Left Column --> */}
        <div className="bg-red-300 w-2/12 h-screen overflow-y-auto fixed">
          {/* <!-- Content for the left column --> */}
          <div className="p-4">
            <p>Left Column</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Scroll down to see more content.</p>
            {/* <!-- Add more content here to enable scrolling --> */}
          </div>
        </div>

        {/* <!-- Section --> */}
        <div
          className="bg-green-300 w-10/12 ml-auto p-4"
          style={{ marginLeft: "16.67%", marginRight:"16.67%"}}
        >
          <div class="p-4">
            <p>Section Content</p>
            <p>This is the main section content.</p>

            <Grid/>
                       
          </div>
        </div>

        {/* <!-- Right Column --> */}
        <div className="bg-yellow-300 w-2/12 h-screen overflow-y-auto fixed right-0">
          {/* <!-- Content for the right column --> */}
          <div className="p-4">
            <p>Right Column</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Scroll down to see more content.</p>
            {/* <!-- Add more content here to enable scrolling --> */}
          </div>
        </div>
      </div>
    </body>
  );
};

export default SolarContainer;