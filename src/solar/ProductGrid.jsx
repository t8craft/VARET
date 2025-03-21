import React from 'react'
import Card from './ProductCard'



const Grid = () => {

    //  count items in json

  return (

    //  if count of items in json is less than

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-8 mx-auto'>

            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>


            
    </div>



  )
}

export default Grid