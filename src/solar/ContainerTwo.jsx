import React from "react";
import Grid from "./ProductGrid";
import SelectedItems from "./SelectedItems";

const SolarContainerTwo = () => {
  return (
    <body class="bg-gray-100">
      {/* <!-- Outer Div --> */}
      <div class="relative bg-blue-100 min-h-screen flex">



        {/* <!-- Left Column --> */}

        <div class="bg-red-300 w-2.5/12 h-screen overflow-y-auto fixed">
          {/* <!-- Content for the left column --> */}
          <div class="p-4">
            <p>Left Column</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Scroll down to see more content.</p>
            
            <SelectedItems/>

          </div>
        </div>

        {/* <!-- Section --> */}

        <div
          class="bg-green-300 w-7/12 ml-auto p-4"
          style={{ marginLeft: "20.8%" , marginRight: ""  }}
        >
          <div class="p-4">
            <p>Section Content</p>
            <p>This is the main section content.</p>

            <Grid/>
           
          </div>
        </div>

        {/* <!-- Right Column --> */}

        <div class="bg-yellow-300 w-2.5/12 h-screen overflow-y-auto fixed right-0 ">
          {/* <!-- Content for the right column --> */}
          <div class="p-4">
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

export default SolarContainerTwo;