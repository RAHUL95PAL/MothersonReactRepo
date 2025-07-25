import  { useEffect, useState } from "react"

function App() {
  // const [color, setColor] = useState("olive")

  const [color, setColor] = useState(() => {
    return localStorage.getItem("color") || "olive";
  });

  useEffect(() => {
    localStorage.setItem("color", color);
  },[color]);

  return (
    
    <div className="h-screen w-screen duration-200" style={{ backgroundColor: color,height: "100%" }}>
      <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
       <div className="flex flex-wrap justify-center items-center gap-3 shadow-lg bg-white p-4 rounded-3xl px-3 py-2">
   
  <button onClick={()=>setColor("red")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
  style={{backgroundColor:"red",height:"100%"}}>red
  </button>
  <button onClick={()=>setColor("blue")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg"   
  style={{backgroundColor:"blue"}}>blue
  </button>
  <button onClick={()=>setColor("green")}
  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
  style={{backgroundColor:"green"}}>Green
  </button>


  
  </div>
  </div>
  </div>
  )
}

export default App
