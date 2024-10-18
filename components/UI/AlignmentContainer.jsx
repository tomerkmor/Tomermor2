import React from 'react'
import classes from './AlignmentContainer.module.css'

const AlignmentContainer = ({children}) => {
  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

export default AlignmentContainer
