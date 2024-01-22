import { Outlet } from "react-router-dom"
import Navbar, { ProgressBar } from "../components/common"
import { useContext } from "react"
import { ThemeContext } from "../constants/store"
export const Layout = () => {
    const {theme} = useContext(ThemeContext)
    console.log('layout',theme)
  return (
    <div className={`theme-${theme}`}>
        <ProgressBar/>
        <Navbar />
        <Outlet/>
    </div>
  )
}
