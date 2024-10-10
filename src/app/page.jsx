"use client";
import { useState } from "react";
import ClipLoader from 'react-spinners/ClipLoader';

export default function Home() {

  const [loading , setLoading] = useState(false)

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const email = e.target.email.value;

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    setLoading(false)


    const data = await res.json();
    // console.log(data);

    alert(data.message);
  };
  return (
    <div>
      <h1 className="text-center p-5 font-semibold text-xl">Subscribe for Updates</h1>
      <form className="text-center" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
        />
        <button  className="mx-3 px-1 py-0.5 rounded hover:bg-black hover:text-white" type="submit">{loading ? <ClipLoader color="#123abc" loading={loading} size={16} /> :'Subscribe'}</button>
      </form>
    </div>
  );
}
