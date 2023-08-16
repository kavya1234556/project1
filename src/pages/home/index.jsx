import React from 'react'
import profile from '../../assets/images/profile.png'
import featured1 from '../../assets/images/featured1.png'
import featured2 from '../../assets/images/featured2.png'
import featured3 from '../../assets/images/featured3.png'
import './home.css'


import SocialMediaLinks from '../../components/socialMedia_links'
import { workData } from '../works'
import FeaturedComponent from '../../components/featured_content/featured_content'
const Home = () => {
  return (
  <>
  <div className = 'introProfile'>
    <div className='intro'>
      <div className='intro__name'> Hi, I am John,<br/> Creative Technologist </div>
      <div className='intro__about'> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br/> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br/>consequat sunt nostrud amet. </div>
       <div><button className='intro__button'> Download Resume</button></div>
    </div>
    <div className='Profile'>
      <img className='image' src = {profile}/>
    </div>
  </div>
<div className='recent'>
  <div className = 'recentPost'>
    <div className='recentPost__recent'>Recent Post</div>
    <div className='recentPost__View'>View all</div>
  </div>
  <div className='design_icon'>
      <div className='designSystem'>
          <div className='designSystem__heading'>
          Making a design system from scratch
          </div>
          <div className='designSystem__date'>
          12 Feb 2020 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Design Pattern
          </div>
          <div className='designSystem__about'>
          Amet minim mollit non deserunt ullamco est sit<br/> aliqua dolor do amet sint. Velit officia consequat<br/> duis enim velit mollit. Exercitation veniam<br/> consequat sunt nostrud amet.
        </div>
      </div>
      <div className='icons'>
          <div className='icon__heading'>
          Creating pixel perfect icons in Figma
          </div>
          <div className='icon__date'>
          12 Feb 2020&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Figma,icon design
          </div>
          <div className='icon__about'>
          Amet minim mollit non deserunt ullamco est sit<br/> aliqua dolor do amet sint. Velit officia consequat<br/> duis enim velit mollit. Exercitation veniam<br/> consequat sunt nostrud amet.
        </div>
      </div>
  </div>        
</div>
<div className='super'>
  <div className='featured'>
    Featured work
  </div>

  {workData.map((data)=>{
          return <FeaturedComponent key = {data.id} data={data} />
    })}
      
  {/* <div className='featuredContent'>
    <div className='featuredContent__image'>
      <img src={featured1}/>
    </div>
    <div className='featuredContent__info'> 
      <div className='title'> 
        Designing Dashboard
      </div>
      <div className='info'>
        <div><button className='info__1'> 2020</button></div>
        <div className='info__2'>Dashboard</div>
      </div>
      <div className='featuredContent__about'>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </div>
    </div>  
  </div>

  <div className='featuredContent'>
    <div className='featuredContent__image'>
      <img src={featured2}/>
    </div>
    <div className='featuredContent__info'> 
      <div className='title'> 
        Vibrant Portraits of 2020
      </div>
      <div className='info'>
        <div><button className='info__1'> 2018</button></div>
        <div className='info__2'>Illustration</div>
      </div>
      <div className='featuredContent__about'>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </div>
    </div>  
  </div>

  <div className='featuredContent'>
    <div className='featuredContent__image'>
      <img src={featured3}/>
    </div>
    <div className='featuredContent__info'> 
      <div className='title'> 
        36 Days of Malayalam type
      </div>
      <div className='info'>
        <div><button className='info__1'> 2018</button></div>
        <div className='info__2'>Typography</div>
      </div>
      <div className='featuredContent__about'>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </div>
    </div>  
  </div> */}
</div>
<SocialMediaLinks/>

  </>
  
  )
}

export default Home