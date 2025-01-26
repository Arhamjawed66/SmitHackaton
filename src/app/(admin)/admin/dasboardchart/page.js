import { UserChart } from '@/components/chartuser'
import { Component } from '@/components/charvistor'
import React from 'react'

const Dasboard = () => {
  return (
    <div className="container mx-auto  flex flex-row items-center  gap-10 mt-10">
      <div className="flex justify-between items-center">
      <UserChart />
      </div>
     <div className="flex justify-between items-center">
      <Component/>
      </div>
      <div className="flex justify-between items-center">
      <UserChart />
      </div>
    </div>
  )
}

export default Dasboard
