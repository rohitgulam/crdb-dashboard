import { queryByPlaceholderText } from '@testing-library/react'
import React from 'react'

function InputGroup({ label, type, placeholder}) {
  return (
    <div className='flex flex-col w-full px-5'>
        <label
          className='text-xl'
          htmlFor="fname">{label}</label>
        <input className='border-2 rounded border-gray-600 h-11 text-xl px-2' type={type} name="fname" id="fname" placeholder={placeholder} required />
    </div>
  )
}

export default InputGroup