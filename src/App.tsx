import { useState } from 'react'
import './App.css'
import FileUpload from "./components/FileUpload"
import { hexToRgbA } from "./utils/custom-functions"

function App() {
  const [colors, setColors] = useState([])
  const [selectedFiles, setSelectedFiles] = useState([])


  const handleBtnClick = (e: any) => {
    const dropper = new EyeDropper();
    dropper.open().then((res: any) => {
      e.target.style.backgroundColor = res.sRGBHex;
      console.log(res)
      setColors((prev) => [...prev, res.sRGBHex])
    });
  }


  return (
    <div className="App">
      <div className='left-side-container'>
        <div className='left-side-content'>
          <button id='btn' onClick={handleBtnClick}>Click to take dropper</button>
          <div>
            <h4>Selected Hex color code</h4>
            {colors.map((col) => {
              return <div style={{ backgroundColor: col }} className="colors"><p>{col}</p><p>{hexToRgbA(col)}</p></div>
            })}
          </div>
        </div>
      </div>
      <div className='right-side'>
        <div className='img-head'>
          <FileUpload setSelectedFiles={setSelectedFiles} />
          <h3>{selectedFiles.length > 1 ? `${selectedFiles.length} Files` : `${selectedFiles.length} File`} selected.</h3>
        </div>
        <div className='img-container'>
          {selectedFiles.map((m) => {
            const src = URL.createObjectURL(m)
            return <img src={src} className="display-img" />
          })}
        </div>
      </div>
    </div>
  )
}

export default App
