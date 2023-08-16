import React from 'react'
import './body.css'
import second from '../../../../../../src/assets/images/workdetail_2.png'
import third from '../../../../../../src/assets/images/workdetail_3.png'
import SocialMediaLinks from '../../../../../components/socialMedia_links'
const Body = () => {
  return (
    <>
    <div className='mainBody'>
        <div className='mainBody__1'>Heading 1</div>
        <div className='mainBody__2'>Heading 2</div>
        <div className='mainBody__3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia <br/>consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        <div><img className='image2' src = {second}/></div>
        <div><img className='image3' src= {third}/></div>
    </div>
    <SocialMediaLinks/>
    </>
  )
}

export default Body
