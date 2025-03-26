import React from "react";
import Grid from "./ProductGrid";
import Select1 from "./Select1";


const Casing = () => {
  return (
    <body class="bg-gray-100">
      {/* <!-- Outer Div --> */}
      <div class="relative bg-blue-100 h-screen flex">



        {/* <!-- Left Column --> */}

        <div class="bg-white w-2.5/12 h-90% fixed px-10 -ml-8 grid grid-rows-10 gap-2 overflow-none mb-8 mt-5" name="Left Column">
          
          {/* <!-- Content for the left column --> */}
          <div className="p-4 row-span-2 bg-sky-400 rounded-md max-w-full grid grid-rows-2 gap-2">
            
            
                    <div className="row-span-1 bg-teal-600 rounded-md">
                        {/* SET WIDTH */}
                        {/* <p className="invisible">Lorem ipsum dolor sit amet, consectetur adipiscing elit hhggfhgfh.</p> */}
                    </div>          
            
                    <div className="row-span-1 bg-slate-900 rounded-md">
                    </div> 
            

          </div>

          <div
            className="row-span-8 mb-3 overflow-hidden h-full max-w-full"
            style={{ maxHeight: 'calc(100vh - 250px)' }} // adjust as needed
            name="list rack"
          >
             {/* <p>pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp</p>  */}
            <Select1/>

          </div>

        </div>

        {/* <!-- Section --> */}

        <div
          class="bg-white w-8/12 ml-auto p-40 -mt-36"
          style={{ marginLeft: "17%" , marginRight: ""  }}
        >
          <div class="p-4">

            <div className="sticky top-0 w-full bg-orange-400 rounded-md h-40">
                <p>Section Content</p>
                <p>This is the main section content.</p>
            </div>
            

            <Grid/>
           
          </div>
        </div>

        {/* <!-- Right Column --> */}

        <div class="bg-white w-2.5/12 h-screen overflow-hidden fixed right-0 pl-10">
          {/* <!-- Content for the right column --> */}
          <div class="p-4 mt-8">
            <p>Right Column</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Scroll down to see more content.</p>
            
           {/* <Select2/> */}

          </div>
        </div>
      </div>
    </body>
  );
};

export default Casing;