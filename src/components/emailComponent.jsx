import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { MdSend } from 'react-icons/md';
import { useTheme } from "@/contexts/themeContext";



export default function EmailComponent() {

  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    setLoading(false);

    const data = await res.json();
    // console.log(data);

    alert(data.message);
    setEmail("");

  };
  return (
    <div className="flex md:mt-20 mt-16">
      <div className={`md:h-11 h-10 w-64 md:w-80 ${theme === 'light' ? 'bg-black' : 'bg-green-400'} shadow-lg shadow-green-600 transition-all duration-500 gradient-border`}>
        <div className={`ml-2 mt-2 w-64 h-10 md:h-11 z-10 md:w-80 flex justify-start hover:ml-1 hover:mt-1 items-center ${theme === 'light' ? 'bg-green-400' : 'bg-white'} border border-black transition-all duration-500`}>
          <input
            type="email"
            placeholder="Enter your mail"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-64 p-1 h-3/4 focus:outline:none ${theme === 'light' ? 'bg-green-400' : 'bg-white'} ${theme === 'light' ? 'placeholder:text-white' : 'placeholder:text-gray-600'}`}
          />
        </div>
      </div>
      {loading ? (
        <ClipLoader />
      ) : (
        <button onClick={handleSubmit} className="ml-10">
          <MdSend size={28} className={`${theme === 'light' ? 'text-black' : 'text-green-600'} hover:text-green-600 hover:size-9 transition-all duration-700'`}/>
        </button>
      )}
    </div>
  );
}

