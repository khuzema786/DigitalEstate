import React from 'react'
import { Alert } from 'react-bootstrap'

//children is for the text
const Message = ({ variant = 'info', children }) => {
  return <Alert variant={variant}>{children}</Alert>
}

export default Message
