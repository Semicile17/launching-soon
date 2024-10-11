export function LightEmailComponent() {
  return (
    <>
      <div className="h-11 w-60 bg-black shadow-lg shadow-green-600 hover:h-12  transition-all duration-500">
        <div className="ml-2  mt-2 h-11 z-10 w-60 flex justify-center items-center bg-green-400 border border-black hover:h-12 hover:w-64 transition-all duration-500">
          <input 
          type="email"
          placeholder="Enter your mail"
          name="email"
          className="w-56 h-3/4 focus:outline:none bg-green-400 placeholder:text-white"
           />
        </div>
      </div>
      <button className="ml-10">Send</button>
    </>
  );
}

export function DarkEmailComponent() {
    return (
      <>
        <div className="h-11 w-60 bg-green-400 shadow-lg shadow-green-600 hover:h-12 transition-all duration-500">
          <div className="ml-2  mt-2 h-11 z-10 w-60 flex justify-center items-center bg-white border border-black hover:h-12 hover:w-64 transition-all duration-500">
            <input 
            type="email"
            placeholder="Enter your mail"
            name="email"
            className="w-56 h-3/4 focus:outline:none"
             />
          </div>
        </div>
        <button className="ml-10">Send</button>
      </>
    );
  }