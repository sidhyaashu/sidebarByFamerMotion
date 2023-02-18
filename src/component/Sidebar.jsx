import { motion } from 'framer-motion'
import '../App.scss'
import { FaHome,FaUser } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { MdMessage } from 'react-icons/md'
import { BiAnalyse,BiSave } from 'react-icons/bi'
import { BsCartCheckFill } from 'react-icons/bs'
import { AiFillFile ,AiFillSetting,AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'


const Route=[
    {
        path:"/",
        name:"Home",
        icon:<FaHome/>
    },
    {
        path:"/user",
        name:"User",
        icon:<FaUser/>
    },
    {
        path:"/message",
        name:"Messages",
        icon:<MdMessage/>
    },
    {
        path:"/analytics",
        name:"Analytic",
        icon:<BiAnalyse/>
    },
    {
        path:"/order",
        name:"Order",
        icon:<BsCartCheckFill/>
    },
    {
        path:"/filemanager",
        name:"File",
        icon:<AiFillFile/>
    },
    {
        path:"/saved",
        name:"Saved",
        icon:<BiSave/>
    },
    {
        path:"/setting",
        name:"Settings",
        icon:<AiFillSetting/>
    },
]




const Sidebar = ({children}) => {
    const [isOpen,setIsOpen]= useState(true)
    const toggle =()=>setIsOpen(!isOpen)
  return (
    <div className="main-container">
        <motion.div animate={{width:isOpen?"200px":"60px"}}  className='sidebar'>
            <div className="top-section">
                {isOpen && <h2 >SIDHYA</h2>}
                <h2 className="icon-menu" onClick={toggle} ><AiOutlineMenu/></h2>
            </div>
            <section>
                {
                    Route.map((route)=>(
                        <NavLink to={route.path} key={route.name} className="menu-item" activeClassName="active" >
                            <div className="icon">{route.icon}</div>
                            {isOpen && <div className="link_text">{route.name}</div>}
                        </NavLink>
                    ))
                }
            </section>
        </motion.div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar
