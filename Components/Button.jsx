import React from 'react'


export default function Button(props) {

  return (
    <button
      id={props.id}
      className={props.className || ''}
      onClick={props.onClickHandler}
    >
      {props.children}
    </button>
  )
}
