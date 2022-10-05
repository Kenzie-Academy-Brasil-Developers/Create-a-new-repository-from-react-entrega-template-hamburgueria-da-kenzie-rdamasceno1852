import React from 'react'
import { ButtonDefault } from './style'

const Button = ({name, onclick}) => {
  return (
    <>
        <ButtonDefault onClick={onclick} >{name}</ButtonDefault>
    </>
  )
}

export default Button