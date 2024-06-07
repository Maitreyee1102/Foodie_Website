import React from 'react'
import Noodle from '../Components/NoodleHome/noodle'
import { Footer } from '../Components/Footer/Footer'
import Famous from '../Components/famousdish/famous'

export const Home = () => {
  return (
    <>
    <Noodle/>
    <Famous/>
    <Footer/>
    </>
  )
}
export default Home;