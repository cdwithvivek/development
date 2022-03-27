import React, {useState,useEffect} from 'react'; 
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';


const ProgressBar = ({file,setFile}) => {
    
    let [progress,setProgress] = useState(0);
    let [error,setError] = useState(null);
    let [url,setUrl] = useState(null);
    useEffect(()=>{
        const storageRef = projectStorage.ref(file.name);
        const collectoinRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap)=>{
            let precentage = (snap.bytesTransferred/snap.totalBytes)*100;
            setProgress(Math.floor(precentage))
            
        }, (err) =>{
            setError(err)
        }, async () => {
           const url = await storageRef.getDownloadURL();
           setUrl(url)
           const createdAt = timestamp();
           collectoinRef.add({url,createdAt})
           console.log(url) 
        })


    },[file])

    useEffect (()=>{
        if(url)
            setFile(null)
    },[url,setFile])

    return (
        <div className='progress-bar' style= {{width : progress+'%'}}></div>
    )
}

export default ProgressBar;