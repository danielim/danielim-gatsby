import React from 'react'
import Navbar from '../components/Navbar'
import SEO from './SEO'
import './all.sass'

const TemplateWrapper = ({ children }) => {
  return (
    <div className="global">
      <SEO />
      <Navbar />
      {children}
    </div>
  )
}

export default TemplateWrapper
