import { useState } from 'react'
import axios from 'axios'

import FileDownload from 'js-file-download'
function App() {
  const [count, setCount] = useState(0)

  function download(e){
  
    axios({
      url:'http://localhost:8000',
      method:'get',
      responseType:"blob"
    }).then((res)=>{
      FileDownload(res.data,'downloaded.pdf')
    })

  }
  

  return (
    
    
     <div 
     className='
     flex border-2
    border-green-300
     w-screen h-screen 
     justify-center 
     items-center'>
      <button
      className='
      border-2
     border-blue-600
     p-2
     rounded
     w-48
     '
     onClick={(e)=>{
      console.log("myanmeis")
      download()}}
      >download</button>
    </div>
  )
}

export default App
