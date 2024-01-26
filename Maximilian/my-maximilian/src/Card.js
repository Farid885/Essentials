import React from 'react'


function Card({children}) {

    const handleClick = ()=>{
        console.log('salam')
    }
  return (
    <div>
    <li>

        <button  onClick={handleClick}>{children}</button>
    </li>
    </div>
  )
}

export default Card