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
    <div className="flex">
      <div className={`h-11 w-60 ${theme === 'light' ? 'bg-black' : 'bg-green-400'} shadow-lg shadow-green-600 hover:h-12  transition-all duration-500`}>
        <div className={`ml-2  mt-2 h-11 z-10 w-60 flex justify-center items-center ${theme === 'light' ? 'bg-green-400' : 'bg-white'} border border-black hover:h-12 hover:w-64 transition-all duration-700`}>
          <input
            type="email"
            placeholder="Enter your mail"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-56 h-3/4 focus:outline:none ${theme === 'light' ? 'bg-green-400' : 'bg-white'} ${theme === 'light' ? 'placeholder:text-white' : 'placeholder:text-gray-600'}`}
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

