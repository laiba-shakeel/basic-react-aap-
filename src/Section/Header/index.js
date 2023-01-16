import React from 'react'
import { Nav  } from "./headElements";
const Header = () => {
  return (
    
   <>
   <Nav className='container'>
 
    <img className="me-3" src="https://upload.wikimedia.org/wikipedia/commons/4/42/OLX_New_Logo.png" alt="" width="45px" height="50px" />

   <img className="mt-3" src="https://www.pngfind.com/pngs/m/242-2423873_car-svg-royalty-free-driverless-car-icon-png.png" alt="" width="20px" height="22px"/>
   <p className='mt-3 ms-2'>Motors</p>
   <img className="mt-3 ms-4" src="https://toppng.com/uploads/preview/house-icon-transparent-background-115494305756ptgx3h27k.png" alt=""  width="20px" height="22px"/>
   <p className=' mt-3 ms-2'>Property</p>
   
   </Nav>
   </>
    
  )
}

export default Header
