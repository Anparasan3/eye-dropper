import "./FileUpload.css"
import { useMessageContext } from "../context/MessageContext"

type FileUploadProps = {
  setSelectedFilesFun: (arr: any) => void
}

const FileUpload: React.FC<FileUploadProps> = (props) => {
  const imageSize = "2625339"
  const { setSelectedFilesFun } = props
  const { notifyInfo, notifyError } = useMessageContext()

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectFile = files as FileList

    if (!!/^image\//.test(selectFile[0].type)) {
      if (selectFile[0].size < Number(imageSize)) {
        // console.log(e.target.files[0])
        const newFiles = Object.values(selectFile)
        setSelectedFilesFun(newFiles);
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