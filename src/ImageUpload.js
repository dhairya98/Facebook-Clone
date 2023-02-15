import React, { useState } from 'react'
import './ImageUpload.css'
import PersonIcon from '@mui/icons-material/Person';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import {storage,db} from './firebase'
import Modal from '@mui/material/Modal';
import {useNavigate} from 'react-router-dom'
import firebase from 'firebase/compat/app';

function getModalStyle(){
    const top=50;
    const left=50;
    return{
        top:`${top}%`,
        left:`${left}%`,
        transform:`translate(-${top}%, -${left}%)`
    }
}
const useStyles=makeStyles((theme)=>({
    paper:{
        position: 'absolute',
        width: 500,
        height: 343,
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: 'black',
        opacity:0.8,
        color: 'white',
        border: '2px solid #DDDFE2',
        outline: 'none',

        boxShadow: 'purple',

        borderRadius:'5px'
    }
}))

function ImageUpload({username}) {
    const classes=useStyles()
    const [modalStyle]=useState(getModalStyle)
    const [open,setOpen]=useState(false)
    // to toggle modal
    const [comment,setComment]=useState('')
    const [image,setImage]=useState('')
    const [caption,setCaption]=useState('')
    const [progress,setProgress]=useState(0)
    const [noLikes,setnoLikes]=useState(0)
    // const [imageUrl, setImageUrl] = useState("");
    function handleOpen(){
        setOpen(true)
    }
    function handleClose(){
        setOpen(false)
    }
    function uploadFileWithClick(){
        document.getElementsByClassName('imageFile')[0].click()
    }
    function handleChange(e){
        if(e.target.files[0]){
            console.log(e.target.files[0])
            setImage(e.target.files[0])
        }
    }

    const handleUpload = (event) => {
        event.preventDefault()
        console.log('image is',image)

        if (image == '') {
            db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                imageUrl: image,
                noLikes: noLikes,
                username: username
            })
        } else {
            console.log('=>',storage)
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            console.log(uploadTask)
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                    alert(error.message);
                },
                () => {
                    console.log('NOW=>',storage.ref())
                    storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            db.collection("posts").add({
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                caption: caption,
                                imageUrl: url,
                                noLikes: noLikes,
                                username: username
                            });
                            handleClose();
                            setProgress(0);
                            setCaption("")
                            setImage(null);
                        })
                }
            )
        }
    }



  return (
    
    <div className='imageupload'>
        <Modal
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <form className="imageupload__commentAssign">
                        <div className="imageupload__firstSectionModal">
                            <h3>Create Post</h3>
                        </div>
                        <div className="imageupload__secondSectionModal">
                            <PersonIcon
                                className="imageupload__avatar"
                                alt=""
                            />
                            <input type="text" onChange={(e) => setCaption(e.target.value)} onClick={handleOpen} placeholder={`What's on your mind ${username} ?`} />
                        </div>
                        <hr />
                        <div className="imageupload__imageuploadModal" onClick={uploadFileWithClick}>
                            <img src="https://cdn-icons-png.flaticon.com/512/2659/2659360.png" className="imageupload__gallery" alt=""></img>
                            <input type="file" className="imageFile" onChange={handleChange} />
                            <h3>Photo</h3>
                        </div>
                        <br />
                        <div className="imageupload__feedModal">
                            <label class="containerr">
                                <input type="checkbox" checked className='imageupload__checkbox'/>
                                <span class="checkmark"></span>
                            </label>
                            <div class="imageupload__colorwrap1">
                                <img src="https://cdn-icons-png.flaticon.com/512/7553/7553800.png" className="imageupload__newsFeed" />
                            </div>
                            <h3>News Feed</h3>
                            <br />
                            <h2 className={`imageText ${image && 'show'}`}>Image is added and will be displayed after clicking the Post button</h2>
                            <Button type="submit" onClick={handleUpload} className="imageupload__submitButton">Post</Button>
                        </div>
                    </form>
                </div>
        </Modal>
        <div className="imageupload__container">
            <div className="imageupload__firstSection">
                <h3>Create Post</h3>
            </div>

            <div className="imageupload__secondSection">
                <PersonIcon
                    className="imageupload__avatar"
                    alt=""
                />
                <input type="text" onClick={handleOpen} placeholder={`What's on your mind ${username} ?`} />
            </div>
            <hr />
            <div className="uploadimage__options" onClick={setOpen}>
                <div className="imageupload__imageupload">
                    <img src="https://cdn-icons-png.flaticon.com/512/2659/2659360.png" className="imageupload__gallery" alt=""></img>
                    <h3>Photo</h3>
                </div>
                <div className="imageupload__more">

                    <img src="https://cdn-icons-png.flaticon.com/512/7553/7553800.png" className="imageupload__dots" alt="" />
                </div>
            </div>
            <progress value={progress} max="100" className={`progress ${progress && 'show'}`} />
        </div>
        {/* </div> */}
    </div>
  )
}

export default ImageUpload