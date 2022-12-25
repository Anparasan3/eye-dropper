import { useState } from 'react'
import './App.css'
import FileUpload from "./components/FileUpload"
import { hexToRgbA } from "./utils/custom-functions"

interface SelectedFile {

}

const App: React.FC = () => {
  const [colors, setColors] = useState<Array<string>>([])
  const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([])


  const handleBtnClick = (e: any) => {
    // @ts-ignore
    const drop = new EyeDropper();
    const abortController = new AbortController();

    drop.open({ signal: abortController.signal }).then((res: any) => {
      e.target.style.backgroundColor = res.sRGBHex;
      console.log(res)
      setColors((prev) => [...prev, res.sRGBHex])
    }).catch((err: any) => console.log(err))
  }

  const setSelectedFilesFun = (newFiles: Array<Object>) => {
    setSelectedFiles([...selectedFiles, ...newFiles])
  }

  return (
    <div className="App">
      <div className='left-side-container'>
        <div className='left-side-content'>
          <button id='btn' onClick={handleBtnClick}>Click to take dropper</button>
          <div>
            <h4>Selected Hex color code</h4>
            {colors.map((col: any) => {
              return <div style={{ backgroundColor: col }} className="colors"><p>{col}</p><p>{hexToRgbA(col)}</p></div>
            })}
          </div>
        </div>
      </div>
      <div className='right-side'>
        <div className='img-head'>
          <FileUpload setSelectedFilesFun={setSelectedFilesFun} />
          <h3>{selectedFiles.length > 1 ? `${selectedFiles.length} Files` : `${selectedFiles.length} File`} selected.</h3>
        </div>
        <div className='img-container'>
          {selectedFiles.map((m: any) => {
            const src = URL.createObjectURL(m)
            return <img src={src} className="display-img" />
          })}
        </div>
      </div>
    </div>
  )
}

export default App
