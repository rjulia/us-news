import React from 'react'
import './Avatar.scss'

// Clasic
const Avatar = ({ letter }) => {
  return (
    <div className="avatar">
      <p>{letter}</p>
    </div>
  )
}

// max performace

// export default ({ letter }) => (
//     <div className="avatar">
//       <p>{letter}</p>
//     </div>
//   )

// Easy to understand best performace

// export const Avatar = ({ letter }) => (
//   <div className="avatar">
//     <p>{letter}</p>
//   </div>
// )


export default Avatar