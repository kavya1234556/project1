import React from 'react'
import FeaturedComponent from '../../components/featured_content/featured_content'
import featured1 from '../../assets/images/featured1.png'
import featured2 from '../../assets/images/featured2.png'
import featured3 from '../../assets/images/featured3.png'
import featured4 from '../../assets/images/featured4.png'
import SocialMediaLinks from '../../components/socialMedia_links'

export const workData = [{
  id : 1,
  title: "Designing Dashboards",
  image: featured1,
  year : 2020, 
  subtitle: "Dashboard",
  body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'},
  {
  id : 2,
  title: "Vibrant Portraits of 2020",
  image: featured2,
  year : 2018, 
  subtitle: "Dashboard",
  body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}, 
  {
  id : 3,
  title: "36 Days of Malayalam type",
  image: featured3,
  year : 2018, 
  subtitle: "Dashboard",
  body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
  id : 4,
  title: "Components",
  image: featured4,
  year : 2020, 
  subtitle: "Dashboard",
  body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  }
]
const Works = () => {

  return (
    <>
    <div className='top-div'>
    <div className='heading'>Works</div>
    {workData.map((data)=>{
          return <FeaturedComponent key = {data.id} data={data} />
    })}
    <SocialMediaLinks/>
    </div>
    </>
  )
}

export default Works
// dhrsdjkuewdkhrd