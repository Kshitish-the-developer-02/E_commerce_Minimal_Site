import React from 'react'
import bannerImg from '../../../public/images/banner.png'
import { GiShoppingBag } from "react-icons/gi";

function Banner() {
  return (
    <div className=' bg-primaryBg py-12 xl:px-28 px-4'>
        <div className=' py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14 '>
            {/* image section */}
            <div className=' md:w-1/2'>
                  <img src={bannerImg} alt="banner photo" />
            </div>
            <div className=' md:w-1/2'>
                <h1 className=' text-5xl font-light  mb-5'>
                    Collections
                </h1>
                <p className=' text-xl mb-7'>
                you can explore and shop many differnt collection
                from various barands here.
                </p>
                <button className=' bg-Black hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-sm flex items-center gap-2'>
                    <GiShoppingBag className=' inline-flex'/> Shop Now
                </button>
            </div>
           
        </div>
    </div>
  )
}

export default Banner