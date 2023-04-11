import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({label, variant, ...rest}) => {
  return (
    <div><button {...rest} className={`btn btn-${variant} mx-1`}>{label}</button></div>
  )
}

export default Button