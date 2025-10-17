import React from 'react'
import Header from '../components/Header.jsx'
import Steps from '../components/Steps.jsx'
import Middle from '../components/Middle.jsx'
import Testimonials from '../components/Testimonials.jsx'
import { Generate } from '../components/Generate.jsx'

export default function Home  () {
  return (
    <div>
      <Header></Header>
     <Steps></Steps>  
     <Middle></Middle>
       <Testimonials></Testimonials> 
       <Generate></Generate>
        </div>
  )
}
