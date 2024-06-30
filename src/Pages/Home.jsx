import React from 'react'
import Noodle from '../Components/NoodleHome/noodle'
import Famous from '../Components/famousdish/famous'
import Chef from '../Components/Chefs/chef'
import Customer from '../Components/Customer/Customer'

export const Home = () => {
  return (
    <>
    <Noodle/>
    <Famous/>
    <Chef/>
    <Customer/>
    </>
  )
}
export default Home;