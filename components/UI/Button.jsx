import React from 'react'
import classes from './Button.module.css'

const Button = ({children, onClick = () => {}, props}) => {
  return (
    <button onClick={onClick}className={classes.button} props> 
      {children}
    </button>
  )
}

export default Button
