import React from 'react'
import TopSearch from './TopSearch' 
import TopOptions from './TopOptions'

export default function TopNav() {
  return (
    <nav className='py-3 flex justify-between items-center bg-slate-100'>
       <TopSearch text=""/>
       <TopOptions/>
    </nav>    
  )
}
