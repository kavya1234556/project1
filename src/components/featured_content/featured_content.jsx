import React from 'react'
import './featured_content.css'
import {Link} from 'react-router-dom'
import clsx from 'clsx'
const FeaturedComponent = ({data, home}) => {
  return (
<>
<div className='Content'>
<Link to = {`/works/${data.id}`}>
  <div className='Content__image'>
    <img src={data.image}/>
  </div>
</Link> 
  <div className='Content__info'> 
    <div className='titlee'> 
      {data.title}
    </div>
    <div className='infoo'>
      <div><button className='infoo__1'> {data.year}</button></div>
      <div className='infoo__2'>{data.subtitle}</div>
    </div>
    <div className='Content__about'>
    {data.body}
    </div>
  </div>  
</div>
<hr className={clsx('line1', {
  'homeLine':home
})}/>

</>
  )
}

export default FeaturedComponent