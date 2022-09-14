import React from 'react'

function InputGroup({ label, type, placeholder, name, value, onChange}) {
  return (
    <div className='flex flex-col w-full'>
        <label
          className='text-xl'
          htmlFor={name}>{label}</label>
        <input className='border-2 rounded border-gray-600 h-11 text-xl px-2 py-1' type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={onChange} required />
    </div>
  )
}

export default InputGroup