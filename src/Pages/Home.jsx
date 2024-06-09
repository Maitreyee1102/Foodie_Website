import React from 'react'
import Noodle from '../Components/NoodleHome/noodle'
import { Footer } from '../Components/Footer/Footer'
import Famous from '../Components/famousdish/famous'
import Chef from '../Components/Chefs/chef'
import Customer from '../Components/Customer/Customer'
import Hungry from '../Components/Hungry/Hungry'

export const Home = () => {
  return (
    <>
    <Noodle/>
    <Famous/>
    <Chef/>
    <Customer/>
    <Hungry/>
    <Footer/>
    </>
  )
}
export default Home;