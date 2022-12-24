import "./FileUpload.css"
import { useMessageContext } from "../context/MessageContext"

function FileUpload({ setSelectedFiles }: { setSelectedFiles: any }) {
  const imageSize = "2625339"
  const { notifyInfo, notifyError } = useMessageContext()

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0]; // its for single file
    if (!!/^image\//.test(file.type)) {
      if (file.size < imageSize) {
        // console.log(e.target.files[0])
        const newFiles = Object.values(e.target.files)
        setSelectedFiles((prev: any) => [...prev, ...newFiles]);
        notifyInfo("Image uploaded successfully.")
      } else {
        notifyError("Upload less than 2mb size image");
      }
    } else {
      notifyError("Please upload valid image");
    }
  };

  return (
    <input
      id="uploadFile"
      name="file"
      type="file"
      accept=".jpg, .jpeg, .png"
      multiple
      onChange={handleImageUpload}
      title=""
      placeholder=""
    />
  )
}

export default FileUpload