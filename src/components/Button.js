import React from 'react'

const Button = ({ onClick, classText, text }) => {
  return (
    <div>
        <button onClick={onClick} className={classText}>{text}</button>
    </div>
  )
}

export default Button