import React from 'react';
import { Link } from 'react-router-dom';


function Button({ LinkLocation, BtnName, Icon}) {
  return (
    <Link to={LinkLocation}
        className="border-2 border-crdbDark rounded py-3 px-6 inline-block flex items-center"
    >
        {Icon} <span className='ml-2' > {BtnName} </span>
    </Link>
  )
}

export default Button