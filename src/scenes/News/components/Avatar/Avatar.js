import React from 'react'
import './Avatar.scss'

const Avatar = ({ letter }) => {
  return (
    <div className="avatar">
      <p>{letter}</p>
    </div>
  )
}

export default Avatar
