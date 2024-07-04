import React from 'react'
import Navbar from './Navbar'
import farhad from '../images/Issue.png'
import './style.css'
const Issue = () => {
  return (
    <div>
      <Navbar name="Issue"/>
      <div className='w-[86rem] h-[656px] bg-black shadow-lg mt-[4rem] fixed hhh'>
        <span className='px-4 py-2.5 ml-10 absolute top-6 border rounded-md text-white hover:bg-blue-700'>Created</span>
        <span className='px-4 py-2.5 ml-[9rem] absolute top-6 border rounded-md text-white hover:bg-blue-700'>Assigned</span>
        <span className='px-4 py-2.5 ml-[16rem] absolute top-6 border rounded-md text-white hover:bg-blue-700'>Mentioned</span>
        <input type="text" placeholder='is:open is:issue author:Farhad-Rahimi-KLIE archived:false' className='ml-[26rem] mt-4 w-[56rem] rounded-md bg-black border py-[0.7rem]'/>
        <div className='w-[78rem] h-[5rem] ml-[4rem] mt-6 rounded-md jjj'>
            <img src={farhad} alt="" className='w-10 absolute top-[7.3rem] ml-2 cursor-pointer'/>
            <h3 className='ml-[4rem] text-lg absolute top-[7.5rem] font-bold cursor-pointer'>1 Open</h3>
            <h4 className='ml-[9rem] absolute top-[7.5rem] text-lg font-bold cursor-pointer'>✔ 0 Closed</h4>
            <span className='ml-[58rem] absolute top-[7.4rem] font-bold cursor-pointer'>Visibility</span>
            <span className='ml-[65rem] absolute top-[7.4rem] font-bold cursor-pointer'>Organization</span>
            <span className='ml-[74rem] absolute top-[7.4rem] font-bold cursor-pointer'>Sort</span>
        </div>
        
      </div>
    </div>
  )
}

export default Issue
