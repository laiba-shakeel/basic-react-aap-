import React from 'react'
import MiddleDividers from '../../components/Card/DividerCard'
import Navbar from '../../Section/Navbar/Navbar'
import { cars } from '../../config/DummyData'
export default function Cars() {
  return (
    <div>
    <Navbar/>
    {cars.map((post, idx) => (
            <MiddleDividers key={idx} data={post} />
          ))}
    </div>
  )
}
