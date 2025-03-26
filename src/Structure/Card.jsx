import React from 'react'

const Card = () => {
  return (
    <div class="bg-white rounded-lg border p-2">
        <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" class="w-full h-48 rounded-md object-cover"/>
        <div class="px-1 py-4">
        <div class="font-bold text-xl mb-2">TELEVISION</div>


        <div className='grid grid-rows-3 h-auto gap-2 p-1'>

            {/* VOLT*/}

            <div className='bg-slate-100 w-full grid grid-cols-2 h-10'>

                <div className='col-span-1 text-2xl pl-2 pt-1'>

                      Watts

                </div>

                <div className='col-span-1 text-2xl text-right text- pr-2 pt-1'>
                      200
                </div>

            </div>

              {/* WATT */}

            <div className='bg-slate-500 w-full h-10'>

            </div>

            {/* ADD ITEM BUTTON */}

            <div className='bg-slate-500 w-full grid grid-cols-2'>

                <div className='col-span-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                </div>

                <div className='col-span-1'> 

                </div>

            </div>


        </div>


        {/* <p class="text-gray-700 text-base">
            This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
        </p>
        </div>
        <div class="px-1 py-4">
        <a href="#" class="text-blue-500 hover:underline">Read More</a> */}
        </div>
    </div>
  )
}

export default Card