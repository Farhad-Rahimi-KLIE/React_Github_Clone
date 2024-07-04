import React, { useState } from 'react'
import menu from '../images/menu.png'
import logo from '../images/github_logo.png'
import search from '../images/search.png'
import create from '../images/create.png'
import Issue from '../images/Issue.png'
import Pull_Request from '../images/Pull_Request.png'
import notifications from '../images/notifications.png'
import profile from '../images/profile.png'
import Menu_Bar from './Menu_Bar'
import Profile from './Profile'
import Newjan from './Newjan'
const Navbar = (props) => {
  const [open,setOpen] = useState(false);
  const [proopen,setProopen] = useState(false);
  const [openjan,setOpenjan] = useState(false);
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-black shadow-md fixed w-full navbar-black">
        <img src={menu} alt="" onClick={()=>setOpen(!open)} className="w-9 cursor-pointer ml-3" />
        <a className="navbar-brand flex" href="/overview">
            <img src={logo} alt="" className="w-10 ml-4" /> <span className="mt-1 ml-1 text-2xl font-bold text-white absolute left-[7rem]">{props.name}</span>
        </a>
        <div className='flex flex-row ml-[59rem]'>
        <img src={search} alt="" className="w-9 ml-3 cursor-pointer"/>
        <img src={create} alt="" className="w-9 ml-3 cursor-pointer" onClick={()=>setOpenjan(!openjan)}/>
        <a href="/issue">
        <img src={Issue}  alt="" className="w-9 ml-3 cursor-pointer"/>
        </a>
        <a href="/pull">
        <img src={Pull_Request} alt="" className="w-9 ml-3 cursor-pointer"/>
        </a>
        <img src={notifications} alt="" className="w-9 ml-3 cursor-pointer"/>
        <img src={profile} alt=""className="w-9 ml-4 cursor-pointer" onClick={()=>setProopen(!proopen)}/>
        </div>
      </nav>
      {
        open && <Menu_Bar/>
      }
      {
        proopen && <Profile/>
      }
      {
        openjan && <Newjan/>
      }
    </div>
  )
}

export default Navbar