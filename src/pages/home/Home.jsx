import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collection from './Collection'
import BestSeller from './BestSeller'
import NewsLatter from './NewsLatter'
import Footer from './Footer'
function Home() {
  return (
    <div>
        <Banner/>
        <Category/>
        <Products/>
        <Collection/>
        <BestSeller/>
        <NewsLatter/>
        <Footer/>
    </div>
  )
}

export default Home