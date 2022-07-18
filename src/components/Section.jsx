import React from 'react'
import PropTypes from 'prop-types'


const Section = props => {
  return (
    <div className="section">
        {props.children}
    </div>
  )
}

export const SectionTitle = props => {
    return (
      <div className="section__Title">
          {props.children}
      </div>
    )
}

export const SectionBody = props => {
    return (
      <div className="section__Body">
          {props.children}
      </div>
    )
  }
  
  
Section.propTypes = {}

export default Section