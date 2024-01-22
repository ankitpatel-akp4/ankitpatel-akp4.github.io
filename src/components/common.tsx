import {ThemeContext, navLinkData} from '../constants/store';
import { useContext, useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from 'react-scroll'



import { HiMoon } from 'react-icons/hi';
import { FaSun } from 'react-icons/fa';
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
const Navbar = () => {
    const {theme ,setTheme }= useContext(ThemeContext)
    const [toggle, setToggle] = useState(false)    
    return (
        <nav className="sticky top-1 bg-skin-1">
            <div className='flex relative gap-x-3 px-5 lg:px-24 p-2 justify-between bg-skin-1 items-center z-20'>
                <div className="w-52 z-20">
                    <img src="/img/logo.png" alt="logo" />
                </div>
                <div className='flex gap-10'>
                <div            
                    className={`hidden justify-center items-center top-20 left-0 bg-skin-1
                    lg:flex lg:w-auto lg:flex-row lg:gap-x-10 font-bold text-skin-5`}>
                    {navLinkData.map((e,i)=>
                    e.text === 'Resume'?
                    <a href={e.url} download>{e.text}</a>
                    :
                    <Link
                        key={i}
                        activeClass="active" 
                        className='text-skin-5 cursor-pointer [&.active]:text-skin-4 hover:text-skin-4 text-center'
                        to={e.url} 
                        spy={true} 
                        hashSpy={true}
                        smooth={true} 
                        offset={-200} 
                        duration={500}
                        
                     
                    >
                        {e.text}
                    </Link>
                            // <HashLink
                    // smooth
                    // key={i} 
                    // to={"/#"+e.url}        
                    // className={`${location.pathname+location.hash === "/#"+e.url? 'text-skin-4':null} hover:text-skin-4 text-center`} 
                    // >            
                    
// </HashLink>
                        

                    )}
                    

                </div>
                <div className='z-20 flex items-center gap-10 lg:block lg:gap-0 text-skin-3'>
                    <button onClick={()=>setToggle((pre)=> !pre)} className='lg:hidden w-10'>
                        {/* <svg className='stroke-skin-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" strokeWidth=".6" fill="rgba(0,0,0,0)" strokeLinecap="round" style={{cursor: "pointer"}}>
                            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                                <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
                                <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
                            </path>
                            <rect width="10" height="10" stroke="none">
                                <animate dur="2s" id="reverse" attributeName="width" begin="click" />
                            </rect>
                            <rect width="10" height="10" stroke="none">
                                <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
                                <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
                            </rect>
                        </svg> */}
                        {toggle?<IoClose size={"3rem"}/>:<IoMenu size={"3rem"}/>}
                    </button>
                    <button onClick={()=> {
                        let newTheme = theme == 'dark' ? 'light' : 'dark';
                        localStorage.setItem('theme',newTheme)
                        theme === 'dark'&& setTheme('light') || theme === 'light' && setTheme('dark')}
                        
                    }
                        >{theme === 'dark'&& <FaSun/> || theme === 'light' && <HiMoon/>}</button>
                </div>
                </div>
            </div>
            <div className='text-skin-5 font-bold'>
                <AnimatePresence mode="wait" >
                {toggle?
                
                <motion.div
                    initial={{ y: -1000, opacity: 0,}}
                    animate={{ y: 0, opacity: 1,  }}
                    exit={{ y: -1000, opacity: 0,  }}
                    transition={{ duration: 0.5 }}
                    className={`z-10 h-screen
                    flex flex-col gap-2 absolute w-full  top-18 pt-4 left-0 bg-skin-1
                    lg:hidden`}>
                        
                        {navLinkData.map((e,i)=>
                        // <HashLink
                        // smooth
                        // key={i} to={e.url}    
                        // onClick={()=> setToggle(!toggle)}
                        // className={`${location.pathname+location.hash === e.url? 'text-skin-4 font-bold':null} hover:text-skin-4 hover:font-bold w-full text-center py-2 hover:bg-skin-5/35`} 
                        // >{e.text}</HashLink>
                        e.text === 'Resume'?
                        <a href={e.url} 
                        
                        className='text-skin-5 cursor-pointer [&.active]:text-skin-4 hover:text-skin-4 hover:font-bold w-full text-center py-2 hover:bg-skin-5/35'

                        download>{e.text}</a>
                        :
                        <Link
                        key={i}
                        onClick={()=> setToggle(!toggle)}
                        activeClass="active" 
                        className='text-skin-5 cursor-pointer [&.active]:text-skin-4 hover:text-skin-4 hover:font-bold w-full text-center py-2 hover:bg-skin-5/35'
                        to={e.url} 
                        spy={true} 
                        hashSpy={true}
                        smooth={true} 
                        offset={-200} 
                        duration={500} 
                        download={e.text === "Resume"?true:false} 
                    >
                        {e.text}
                    </Link>
                        )}
                        
                        
                </motion.div>
                
                :null}
                </AnimatePresence>
            </div>
        
        </nav>
    )
}

export default Navbar


export const ProgressBar = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

    return (
        <div className='bg-skin-1 fixed w-full top-0 h-1 z-20'>
            <motion.div className="bg-skin-4 origin-left absolute top-0 right-0 left-0 m-0  h-1 z-20" style={{ scaleX }} />
        </div>
    )
    
}




