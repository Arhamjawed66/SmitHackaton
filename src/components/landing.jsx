"use client";
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image';
import heroimage from "../../assets/heroimage/hero.jpg"
import DialogExample from '@/app/pages/auth/signup';
import ExampleSinup from '@/app/pages/auth/login';

const LandingPage = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image src={heroimage}   
       alt="hero" width={800} height={1500}  />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        AP ki preshani hameri zimaydari
        <br className="hidden lg:inline-block" />
        Asaan karye Zindagi ko
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authgaentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center gap-4 ">
        <ExampleSinup/>
       <DialogExample/>

                    

        
    
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default LandingPage
