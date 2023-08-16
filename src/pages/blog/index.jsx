import React from 'react'
import './blog.css'
import BlogInteraction from '../../components/blog_interaction/blog_interaction'
import SocialMediaLinks from '../../components/socialMedia_links'

const Blog = () => {
  return (
    <>
    <div className='top-div'>
    <div className='heading'>Blog</div>
    <BlogInteraction/>
    <BlogInteraction/>
    <BlogInteraction/>
    <BlogInteraction/>
    <SocialMediaLinks/>
    </div>
    </>
  )
}

export default Blog