import React from 'react'

const List = () => {
  return (
    <div className="grid grid-cols-3 gap-2 p-2">

                <div className='col-span-1 bg-gray-400 h-24 rounded-md'>

                </div>

                <div className='col-span-2 bg-gray-400 h-24 rounded-md grid grid-rows-3 p-1 gap-2'>

                      <div className='bg-white w-full rounded-md'>

                      </div>

                      <div className='bg-white w-full rounded-md'>

                      </div>

                      <div className='bg-white w-full rounded-md'>

                      </div>

                </div>
        </div>
  )
}

export default List