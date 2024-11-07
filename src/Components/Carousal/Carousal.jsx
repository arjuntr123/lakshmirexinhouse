import React from 'react'
import './Carousal.css'
import img1 from '../../Images/Curtains/christopher-martyn-nx1Qs_Q04dY-unsplash.jpg'
import img2 from '../../Images/Curtains/craig-whitehead-c4pxfOcObVI-unsplash.jpg'
import img3 from '../../Images/Curtains/curtains-hang-from-several-window-openings1.jpg'
import img4 from '../../Images/Curtains/darren-richardson--E7D6OhcAVY-unsplash.jpg'
import img5 from '../../Images/Curtains/lisa-forkner-slASWHN16h8-unsplash.jpg'
import img6 from '../../Images/Curtains/pexels-jonathanborba-3255244 (2).jpg'
import img7 from '../../Images/Curtains/window-6885494_640.jpg'

function Carousal() {
  return (
    <div className='Carousal'>
        <div className='Carousal-scroll'>
            <span><img  src={img1} className='Carousal-span-img'/></span>
            <span><img  src={img2} className='Carousal-span-img'/></span>
            <span><img  src={img3} className='Carousal-span-img'/></span>
            <span><img  src={img4} className='Carousal-span-img'/></span>
            <span><img  src={img5} className='Carousal-span-img'/></span>
            <span><img  src={img6} className='Carousal-span-img'/></span>
            <span><img  src={img7} className='Carousal-span-img'/></span>

            <span><img  src={img1} className='Carousal-span-img'/></span>
            <span><img  src={img2} className='Carousal-span-img'/></span>
            <span><img  src={img3} className='Carousal-span-img'/></span>
            <span><img  src={img4} className='Carousal-span-img'/></span>
            <span><img  src={img5} className='Carousal-span-img'/></span>
            <span><img  src={img6} className='Carousal-span-img'/></span>
            <span><img  src={img7} className='Carousal-span-img'/></span>
        </div>
    </div>
  )
}

export default Carousal