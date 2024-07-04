import React, { useState } from 'react'
import github_logo from '../images/github_logo.png'
import home from '../images/images (8).jpeg'
import Issue from '../images/Issue.png'
import Pull_Request from '../images/Pull_Request.png'
import Discussions from '../images/Discussions.png'
import Codespaces from '../images/Codespaces.png'
import one from '../images/1.png'
import profile from '../images/profile.png'
const Menu_Bar = () => {
    const [open,setOpen] = useState(false);
    const HandleClose = ()=>{
      console.log('dd')
     let hhhhh =  document.querySelector(".hhh");
     hhhhh.style.display = "none";
    }
  return (
    <>
    <div className='w-96 h-[656px] bg-black rounded-md shadow-lg fixed hhh z-10'>
    <span className=' text-white absolute left-[22rem] mt-[0.9rem] cursor-pointer' onClick={()=> HandleClose()}>x</span>
     <ul className="navbar-nav">
     <li className="nav-item">
      <a className="nav-link flex" href="/overflow">
        <img src={github_logo} alt="" className='w-10 ml-3'/>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="/home">
        <img src={home} alt="" className='w-7 h-7 ml-4'/>
        <p className='font-bold text-white mt-[4px] ml-3'>Home</p>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="/issue">
      <img src={Issue} alt="" className='w-7 h-7 ml-4'/>
        <p className='font-bold mt-[4px] text-white ml-3'> Issues </p>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="pull">
      <img src={Pull_Request} alt="" className='w-7 h-7 ml-4'/>
        <p className='font-bold text-white mt-[4px] ml-3'>Pull requests</p>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="#">
      <img src={Discussions} alt="" className='w-7 h-7 ml-4'/>
        <p className='font-bold text-white ml-3 mt-[4px]'>Discussions</p>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link flex" href="#">
      <img src={Codespaces} alt="" className='w-7 h-7 ml-4'/>
        <p className='font-bold text-white ml-3 mt-[4px]'>Codespaces</p>
      </a>
    </li>
  </ul>
  <div className='mt-2'>
    <input type="text" placeholder='Repositories' className='w-[22rem] ml-4 border border-white rounded-sm h-[2rem] bg-black font-bold' />
    <img src={one} alt="" className='w-5 ml-[21rem] -mt-6' />
            <div className="flex  cursor-pointer">
                <img src={profile} alt="" className="w-6 h-6 rounded-full ml-4 mt-6"  />
                <p className="text-white font-bold mt-6 ml-4">Farhad-Rahimi-KLIE/javascript_Begginers</p>
            </div>
            <div className="flex  cursor-pointer mb-3">
                <img src={profile} alt="" className="w-6 h-6 rounded-full ml-4 mt-6"  />
                <p className="text-white font-bold mt-6 ml-4">Farhad-Rahimi-KLIE/CSS_Begginers</p>
            </div>
            <button className='ml-4' onClick={()=>setOpen(!open)}>Show more</button>
            {
                open && <More/>
            }
  </div>
     </div>
    </>
  )
}

export default Menu_Bar

const More = ()=>{
    return(
        <>
           <div className='none'>
            <div className="flex  cursor-pointer mb-3">
                <img src={profile} alt="" className="w-6 h-6 rounded-full ml-4 mt-6"  />
                <p className="text-white font-bold mt-6 ml-4">Farhad-Rahimi-KLIE/HTML_Begginers</p>
            </div>
            <div className="flex  cursor-pointer mb-3">
                <img src={profile} alt="" className="w-6 h-6 rounded-full ml-4 mt-6"  />
                <p className="text-white font-bold mt-6 ml-4">Farhad-Rahimi-KLIE/Python_Begginers</p>
            </div>
            <div className="flex  cursor-pointer mb-3">
                <img src={profile} alt="" className="w-6 h-6 rounded-full ml-4 mt-6"  />
                <p className="text-white font-bold mt-6 ml-4">Farhad-Rahimi-KLIE/Php_Begginers</p>
            </div>
            </div>
        </>
    )
}