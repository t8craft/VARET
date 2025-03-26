import React from 'react'

const List2 = () => {
  return (
    <div className="grid grid-cols-3 gap-2 p-2">

                <div className='col-span-1 bg-gray-400 h-24 rounded-md'>
                    <img 
                    
                        src="https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/b41a7fde-dcc1-11ec-9f1b-2e0c91dc8f24.jpg" 
                        className="w-full h-full object-cover"
                    >

                    </img>
                </div>

                <div className='col-span-2 bg-gray-400 h-24 rounded-md grid grid-rows-3 p-1 gap-2'>

                      <div className='bg-white w-full rounded-md grid grid-cols-2'>
                              
                              <div className='col-span-1 ml-2'>
                                   Wattage       
                              </div>

                              <div className='col-span-1 text-right mr-2'>
                                   200
                              </div>
                      </div>

                      <div className='bg-white w-full rounded-md'>

                      </div>

                      <div className='bg-white w-full rounded-md'>

                      </div>

                </div>
        </div>
  )
}

export default List2