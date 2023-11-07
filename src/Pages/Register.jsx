import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";;

const Register = () => {
  const[err,setErr]= useState(false);
  const navigate = useNavigate();  
const handleSubmit= async (event)=>{
event.preventDefault()
const displayName = event.target[0].value;
const email = event.target[1].value;
const password = event.target[2].value;
const file = event.target[3].files[0];
try{
  const res = await createUserWithEmailAndPassword(auth,email,password) ;
  const storageRef =  await ref(storage, displayName);
  
  const uploadTask = await uploadBytesResumable(storageRef, file);
  
  uploadTask.on(
    (error) => {
      setErr(true);
    }, 
    async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        await updateProfile(res.user,{
          displayName,
          photoURL: downloadURL,
        });
        await setDoc(doc(db,"users",res.user.uid),{
          uid: res.user.uid,
          displayName,
          email,
          photoURL: downloadURL
        });


        await setDoc(doc(db,"userChats",res.user.uid),{});
        navigate("/");

      
      });
    }
  );
}
catch(err){
  setErr(true);
}
setErr(false);

}
return (
  <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Chat Application</span>
      <span className="title">Register</span>
      <form onSubmit={handleSubmit}>
        <input required type="text" placeholder="display name" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <input required style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <img src={Add} alt="" />
          <span>Add an avatar</span>
        </label>
        <button>Sign up</button>
        {err && <span>Something went wrong</span>}
        err=false;
      </form>
      <p>
        You do have an account? <Link to="/register">Login</Link>
      </p>
    </div>
  </div>
);
};
export default Register;
