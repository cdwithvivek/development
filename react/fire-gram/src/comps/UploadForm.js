import React, {useState} from 'react'
import ProgressBar from './ProgressBar';
import "./UploadForm.css";
function UploadForm() {
    const [file,setFile] = useState(null)
    const [error,setError] = useState(null)
    const types = ['image/png', 'image/jpeg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        //select or not it will run so using if to prevent
        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
            
        }else {
            setFile(null);
            setError('Please select a image file (png or jpeg) ')

        }
    }
  
    return (
    <form>
        
        <input type="file" onChange={changeHandler} />
        
        <div className='output'>
            {error && <div className='error'>{error}</div>}
            {file && <div className='sucess'>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile}/>}
        </div>
    </form>
  )
}

export default UploadForm