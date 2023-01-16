
import React from 'react'
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const GoToTop = () => {

    const GoToBtn = () => {
        window.scrollTo({top: 0 , left: 0 , behavior: 'smooth'});
    }
  return (
    <div className='top-btn mb-5' onClick={GoToBtn}>
 <Button variant="outlined">Go Back<ArrowUpwardIcon/></Button>
    </div>
  )
}

export default GoToTop
