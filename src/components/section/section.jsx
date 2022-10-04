import React from 'react'
import './section.css';

const SectionComponent = ({children, backgroundColor, height}) => {
  return (
    <div id="section" style={{ backgroundColor, height: `${height}vh`}}>
        {children}
    </div>
  )
}

export default SectionComponent
