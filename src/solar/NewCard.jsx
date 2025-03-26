import React from 'react'

const NewCard = () => {
  return (
    <div class="bg-white rounded-lg border p-2">
        <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" class="w-full h-48 rounded-md object-cover"/>
        <div class="px-1 py-4">
        <div class="font-bold text-xl mb-2">Blog Title</div>


        <div className='grid grid-rows-3 h-24 gap-2 p-1'>

            <div className='bg-slate-500 w-full'>

            </div>

            <div className='bg-slate-500 w-full'>

            </div>

            <div className='bg-slate-500 w-full'>

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

export default NewCard