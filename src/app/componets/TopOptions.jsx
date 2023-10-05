import { BiHelpCircle } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { GrApps } from 'react-icons/gr'

export default function TopOptions() {
  return (
    <div className='flex items-center space-x-4 px-4'>
        <BiHelpCircle/> 
        <FiSettings/>
        <GrApps/>
    </div>
  )
}
