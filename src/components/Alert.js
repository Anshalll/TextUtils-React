import React from 'react'


export default function Alert(props) {
  return (
    <div className={`${props.message.color}`}>
      <p>{props.message.msg}</p>
    </div>
  )
}
