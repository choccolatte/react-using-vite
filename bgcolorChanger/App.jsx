import { useState } from "react"

function App() {
  let [color, setColor] = useState('black')

  return (
  <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-gray px-3 py-2rounded-xl">
          <button onClick={()=>setColor('red')}className='outline-none py-1 rounded text-white shadow-lg px-5' style={{backgroundColor:'red'}}>Red</button>
          <button onClick={()=>setColor('green')}className='outline-none py-1 rounded text-white shadow-lg px-5' style={{backgroundColor:'green'}}>Green</button>
          <button onClick={()=>setColor('blue')}className='outline-none py-1 rounded text-white shadow-lg px-5' style={{backgroundColor:'blue'}}>Blue</button>
          <button onClick={()=>setColor('black')}className='outline-none py-1 rounded text-white shadow-lg px-5' style={{backgroundColor:'black'}}>Black</button>
          <button onClick={()=>setColor('purple')}className='outline-none py-1 rounded text-white shadow-lg px-5' style={{backgroundColor:'purple'}}>Purple</button>
          <button onClick={()=>setColor('pink')}className='outline-none py-1 rounded text-white shadow-lg px-5' style={{backgroundColor:'pink'}}>Pink</button>
          <button onClick={()=>setColor('indigo')}className='outline-none py-1 rounded text-white shadow-lg px-5' style={{backgroundColor:'indigo'}}>Indigo</button>
          <button onClick={()=>setColor('aqua')}className='outline-none py-1 rounded text-white shadow-lg px-5' style={{backgroundColor:'aqua'}}>Aqua</button>
          <button onClick={()=>setColor('fuchsia')}className='outline-none py-1 rounded text-white shadow-lg px-5' style={{backgroundColor:'fuchsia'}}>Fuchsia</button>
          <button onClick={()=>setColor('lime')}className='outline-none py-1 rounded text-white shadow-lg px-5' style={{backgroundColor:'lime'}}>Lime</button>
          <button onClick={()=>setColor('navy')}className='outline-none py-1 rounded text-white shadow-lg px-5' style={{backgroundColor:'navy'}}>Navy</button>
          <button onClick={()=>setColor('teal')}className='outline-none py-1 rounded text-white shadow-lg px-5' style={{backgroundColor:'teal'}}>Teal</button>
          <button onClick={()=>setColor('brown')}className='outline-none py-1 rounded text-white shadow-lg px-5' style={{backgroundColor:'brown'}}>Brown</button>
          <button onClick={()=>setColor('crimson')}className='outline-none py-1 rounded text-white shadow-lg px-5' style={{backgroundColor:'crimson'}}>Crimson</button>
          <button onClick={()=>setColor('orange')}className='outline-none py-1 rounded text-white shadow-lg px-5' style={{backgroundColor:'orange'}}>Orange</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default App
