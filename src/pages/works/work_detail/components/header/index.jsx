import React from 'react'
import './header.css'
import first from '../../../../../../src/assets/images/workdetail_1.png'
const Header = () => {
  return (
<>
  <div className='main'>
    <div className='mainHeading'>Designing Dashboards with <br/>usability in mind</div>
    <div className='header'>
      <div className='header__1'>
        <button className='button'> 2020</button>
      </div>
      <div className='header__2'>
        Dashboard, User Experience Design
      </div>
    </div>
    <div className='header__3'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia<br/>consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    </div>
    <img className='image1' src={first}/>
  </div>  
</>
    )
}

export default Header