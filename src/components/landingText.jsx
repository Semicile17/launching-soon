import { useTheme } from "@/contexts/themeContext";

export default function Landingtext() {
  const {theme} = useTheme()
  return (
    <div>
      <span className="flex fade-in-text-large">
        <h1 className={`${theme === 'light'?'text-black':'text-white'} font-bold md:text-4xl text-2xl font-mono`}>WE'RE</h1>
        <h1
          className="
        text-white font-mono font-bold text-4xl 
        gradient-text ml-5 
        "
        >
          LAUNCHING SOON !
        </h1>
      </span>
      <br/>
      <span className="flex">
        <h1
          className={`${theme === 'light'?'text-black':'text-white'}
         font-mono md:text-xl fade-in-text-small
        `}
        >
          and ready to make a 
        </h1>
        <h1 className="font-mono text-white text-4xl ml-2 gradient-text fade-in-text-small">CHANGE</h1>
      </span>
      <br/>
      <hr className="gradient md:w-[50%]"></hr>
      <br/>
      <span className={`${theme === 'light'?'text-black':'text-white'} fade-in-text-small`}>
        Want to know more 
        <span className="ml-1 font-serif">about us</span>
         ?
        <br/>
        <br/>
        Drop your mail below
      </span>

    </div>
  );
}
