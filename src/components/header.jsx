import { useTheme } from "@/contexts/themeContext"
import ThemeToggle from "./themeToggle"

export default function Header(){

    const {theme} = useTheme()
    return(
      <div className={`h-16 w-full flex items-center justify-end md:p-8  md:gap-x-8 p-3 gap-x-2 fixed top-0 bg-transparent z-10`}>
        <span className={`${theme === 'light' ? 'text-black' : 'text-white'} md:text-xl  text-md font-mono`}>BLACKTREE</span>
        <ThemeToggle/>
      </div>
    )
}