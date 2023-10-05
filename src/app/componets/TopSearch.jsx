import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdOptions } from 'react-icons/io'

export default function TopSearch(props) {
  return (
    <div className='bg-cyan-50 p-3 rounded-full flex justify-between items-center w-[50%]'>
        <AiOutlineSearch/>
        <input type="search" name="search" id="search" defValue={props.text} className='w-[70%] outline-none border-none bg-transparent' placeholder="search mail"/>
        <IoMdOptions/>
    </div>
  )
}
