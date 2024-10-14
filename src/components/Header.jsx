import { useTheme } from "@/contexts/ThemeContext"
import ThemeToggle from "@/components/ThemeToggle"
import logo from "@/assets/logo.svg"

export default function Header(){

    const {theme} = useTheme()
    return(
      <div className={`h-16 w-full flex items-center justify-between md:p-8 p-8 md:gap-x-8  gap-x-2 fixed top-0 bg-transparent z-10`}>
        <span>
          <img src="/logo.svg" alt="logo" className="h-8"/>
        </span>
        <span className={`${theme === 'light' ? 'text-black' : 'text-white'} md:text-xl  text-md font-mono font-semibold`}>BLACKTREE</span>
        {/* <ThemeToggle/> */}
      </div>
    )
}