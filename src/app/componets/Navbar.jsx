import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {BiSolidPencil,BiSolidInbox,BiStar,BiTimeFive} from 'react-icons/bi'
import {FiSend} from 'react-icons/fi'
import {LuStickyNote} from 'react-icons/lu'
import {BsChevronDown} from 'react-icons/bs'

export default function Navbar() {
  return (
    <ul className= 'w-[20%] flex flex-col gap-y-6 py-6 capitalize bg-gray-100 h-screen'>
      <li>
        <Link href='/'>
          <span className= 'flex space-x-4 items-center'>
          <GiHamburgerMenu/>
          <Image src ='/logo_gmail.png' alt='gmail logo' width={100} height={100}/>
          </span>
        </Link>
      </li>
      <li>
        <Link href='/compose'> 
        <span className='flex space-x-4 items-center'>
        <BiSolidPencil/>
        <span>Compose</span>
        </span>
        </Link>
      </li>
      <li>
        <Link href='/inbox'>
        <span className= 'flex space-x-4 items-center'>
        <BiSolidInbox/>
        <span>inbox</span>
        </span>
        </Link>
      </li>
      <li>
        <Link href='/starred'>
        <span className='flex space-x-4 items-center'>
        <BiStar/>
        <span>starred</span>
        </span>
        </Link>
      </li>
      <li>
        <Link href='/snoozed'>
        <span className='flex space-x-4 items-center'>
        <BiTimeFive/>
        <span>snoozed</span>
        </span>
        </Link>
      </li>
      <li>
        <Link href='/sent'>
        <span className='flex space-x-4 items-center'>
        <FiSend/>
        <span>sent</span>
        </span>
        </Link>
        </li>
      <li>
        <Link href='/draft'>
        <span className='flex space-x-4 items-center'>
        <LuStickyNote/>
        <span>draft</span>
        </span>
        </Link>
        </li>
      <li>
        <Link href='/more'>
        <span className='flex space-x-4 items-center'>
        <BsChevronDown/>
        </span>
        </Link>;
        </li>
    </ul>
  
  )
}
