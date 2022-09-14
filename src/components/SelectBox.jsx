import React from 'react'

function SelectBox({label , name1, name2}) {
  return (
    <div className='flex flex-col w-full'>
         <label
         className='text-xl'
         htmlFor="name">{label}</label>
    <select className='border-2 rounded border-gray-600 bg-white h-11 text-xl px-2' name="name" placeholder=" "  required>
    <option className='hidden '></option>
    <option value="name1">{name1}</option>
    <option value="name2">{name2}</option>
  </select>
    </div>
  )
}

export default SelectBox