import React from 'react'
import PropTypes from 'prop-types'

const PolicyCard = props => {
  return (
        <div className="policy-cand">
            <div className="policy-cand__icon">
                <i className={`${props.icon}`}></i>
            </div>
            <div className="policy-cand__info">
                <div className="policy-cand__info__name">
                    {props.name}
                </div>
                <div className="policy-cand__info__desciption">
                    {props.description}
                </div>
            </div>
        </div>
  )
}

PolicyCard.propTypes = {
    name :PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired,
}

export default PolicyCard