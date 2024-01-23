import { ReactElement, ReactNode } from 'react';
import {About, Contact, Hero, Projects, Skills} from '../components/sections';

const HomePage = () => {
  return (
    <div className=''>
      <Observer children={<Hero/>} url='/#hero'/>
      <Observer children={<About/>} url='/#about'/>
      <Observer children={<Skills/>} url='/#skills'/>
      <Observer children={<Projects/>} url='/#projects'/>
      {/* <Observer children={<Resume/>} url='/#resume'/> */}
      <Observer children={<Contact/>} url='/#contact'/>
    </div>
  )
}

interface RequireType {
  children: ReactNode | ReactElement;
  url: string;
}


const Observer = ({children}:RequireType) =>{
  return (
  // <InView as="div" 
  // rootMargin = '-100px'
  // // threshold={.5}
  // className=''
  // onChange={(inView) => {
  //   inView && navigate(url)
  //   }}>
  <>    {children}</>
  // </InView>
)};



export default HomePage