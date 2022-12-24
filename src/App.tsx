import { useState } from 'react'
import './App.css'
import FileUpload from "./components/FileUpload"

function App() {
  const [colors, setColors] = useState([])
  const [selectedFiles, setSelectedFiles] = useState([])


  const handleBtnClick = (e: any) => {
    const dropper = new EyeDropper();
    dropper.open().then((res: any) => {
      e.target.style.backgroundColor = res.sRGBHex;
      console.log(res)
    });
  }


  return (
    <div className="App">
      <div className='left-side'>
        <button id='btn' onClick={handleBtnClick}>Click to take dropper</button>
      </div>
      <div className='right-side'>
        <FileUpload setSelectedFiles={setSelectedFiles} />
        {selectedFiles.map((m) => {
          const src = URL.createObjectURL(m)
          return <img src={src} className="display-img" />
        })}
      </div>
    </div>
  )
}

export default App
