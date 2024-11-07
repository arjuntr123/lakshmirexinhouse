import React, { useEffect, useRef } from 'react'
import './Home.css'
import Header from '../Header/Header'
import img1 from '../../Images/newimg3.jpg'
import img2 from '../../Images/photo-collage.png (1).png'
import img5 from '../../Images/21688.jpg'

import Carousal from '../Carousal/Carousal'
import Footer from '../Footer/Footer'

function Home() {

    const locationRef = useRef(null)

    const handleClick = () => {
        locationRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div>
        <header className='Home-header-div'>
            <Header clickFunction = {handleClick}/>
        </header>
        <div className='Home-main-div'>
            <div className='Home-sub-div-1'>
                <h1 className='Home-sub-div-1-h1'>Your Vision, Our Fabrics <br/> Crafting Beautiful Interiors.</h1>
            </div>

            <div className='Home-sub-div-2'>
                <img className='Home-sub-div-2-img-1' src={img1} />
            </div>

            {/* Sofa */}
            <div className='Home-sub-div-3'>
                <h1 className='Home-sub-div-3-h1'>
                    Cozy Comfort, <span className='Home-sub-div-3-h1-span'>Stylish Design</span>
                </h1>
            </div>

            <div className='Home-sub-div-4'>
                <img className='Home-sub-div-4-img-2' src={img2} />
            </div>
            {/* Curtain */}
            <div className='Home-sub-div-5'>
                <h1 className='Home-sub-div-5-h1'>
                    Beautiful <span className='Home-sub-div-5-h1-span'>curtains,</span> Beautiful homes. 
                </h1>
            </div>

            <Carousal/>

            {/* Carpets */}
            <div className='Home-sub-div-6'>
                <h2 className='Home-sub-div-6-h2'>Wide range of <span className='Home-sub-div-6-h2-span'>Carpets, Floor mates
                    </span> all in one place</h2>
            </div>

            <div className='Home-sub-div-7'>
                <img className='Home-sub-div-7-img' src={img5} />
            </div>

            {/* Location */}
            <div className='Home-sub-div-8' ref={locationRef}>
                <div className='Home-sub-div-8-div-1'>
                    <h1 className='Home-div-8-div-1-h1'>
                        Lakshmi Rexin House <br/>
                        Pavamani Road <br/>
                        Kozhikode - 04<br/>
                        Kerala <br/>
                    </h1>
                </div>
                <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0915699550833!2d75.78237507481228!3d11.254673988924663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659476e11d44b%3A0x2d5b5c338a263dbd!2sLakshmi%20Rexin%20House!5e0!3m2!1sen!2sin!4v1730623523812!5m2!1sen!2sin" className='Home-div-8-iframe' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* Contact */}
            <div className='Home-sub-div-9'>
                <h1 className='Home-sub-div-9-h1'>Contact Us</h1>
                <div className='Home-sub-div-9-div-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='Home-sub-div-9-svg1' viewBox="0 -960 960 960" ><path d="M796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120ZM233-592l76-76.67-21-104.66H187q3 41.66 13.67 86Q211.33-643 233-592Zm365.33 361.33q40.34 18.34 85.84 29.67 45.5 11.33 89.16 13.67V-288l-100-20.33-75 77.66ZM233-592Zm365.33 361.33Z"/></svg>
                    <h1 className='Home-sub-div-9-div-1-h1'>+91 9847091073</h1>
                </div>
                <div className='Home-sub-div-9-div-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='Home-sub-div-9-svg1' viewBox="0 -960 960 960" ><path d="M796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120ZM233-592l76-76.67-21-104.66H187q3 41.66 13.67 86Q211.33-643 233-592Zm365.33 361.33q40.34 18.34 85.84 29.67 45.5 11.33 89.16 13.67V-288l-100-20.33-75 77.66ZM233-592Zm365.33 361.33Z"/></svg>
                    <h1 className='Home-sub-div-9-div-1-h1'>+91 9447542486</h1>
                </div>
                <div className='Home-sub-div-9-div-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='Home-sub-div-9-svg2' viewBox="0 -960 960 960" ><path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 146.67-670v443.33h666.66V-670L480-454.67Zm0-66.66 330.67-212H150l330 212ZM146.67-670v-63.33V-226.67-670Z"/></svg>
                    <h1 className='Home-sub-div-9-div-2-h1'>lakshmirexinhouse@gmail.com</h1>
                </div>
            </div>

            <Footer/>
        </div>
    </div>
  )
}

export default Home