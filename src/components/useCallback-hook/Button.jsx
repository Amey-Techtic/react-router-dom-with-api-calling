import React from 'react'

const Button = ({handleClick, children}) => {
    console.log(`Rendering button - ${children}`);
  return (
    <button onClick={handleClick}>
        {children}
    </button>
  )
}

//React.memo() is a higher order component that will prevent functional component for being re-rendered if its props or state do not change
export default React.memo(Button)
