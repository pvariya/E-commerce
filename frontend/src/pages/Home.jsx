import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivel from '../components/Products/NewArrivel'

const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollectionSection/> 
        <NewArrivel/>
    </div>
  )
}

export default Home