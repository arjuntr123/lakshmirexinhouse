import React from 'react'
import './Header.css'

function Header({clickFunction}) {
  return (
    <div className='Header'>
        <h1 className='Header-h1'>Lakshmi Rexin House</h1>
        <button className='Locate-us-button' onClick={clickFunction}> 
        <svg className='Locate-us-svg' xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960"><path d="M480.06-486.67q30.27 0 51.77-21.56 21.5-21.55 21.5-51.83 0-30.27-21.56-51.77-21.55-21.5-51.83-21.5-30.27 0-51.77 21.56-21.5 21.55-21.5 51.83 0 30.27 21.56 51.77 21.55 21.5 51.83 21.5ZM480-168q129.33-118 191.33-214.17 62-96.16 62-169.83 0-114.86-73.36-188.1-73.36-73.23-179.97-73.23T300.03-740.1q-73.36 73.24-73.36 188.1 0 73.67 63 169.83Q352.67-286 480-168Zm0 88Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
          Locate Us</button>
    </div>
  )
}

export default Header