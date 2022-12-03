import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dice from '../components/dice/Dice'
import Home from '../components/home/Home'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import Restaurants from '../components/restaurants/Restaurants'
import SplashScreen from '../components/splash/SplashScreen'
import { auth, dataBase } from '../Firebase/firebasecofi'
import { actionLoginSync } from '../redux/actions/userActions'

const Router = () => {
  const userStore = useSelector((store) => store.userStore);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(true);

  const traerInfo= async(uid,accessToken)=>{
    const docRef=doc(dataBase,`usuarios/${uid}`)
    const docu= await getDoc(docRef)
    const dataFinal= docu.data()
    console.log(uid);
   console.log(dataFinal);
   if (dataFinal) {
    dispatch(
      actionLoginSync({
        displayName: dataFinal.displayName,
        email:dataFinal.email,
        accessToken,
        phoneNumber:dataFinal.phoneNumber,
        avatar: dataFinal.photoURL,
        uid,
        admin:dataFinal.admin,
        error: false,
      })
    );
   }
  
  
   
  }


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setCheck(false);
      
      if (user?.auth.currentUser) {
        if (Object.entries(userStore).length === 0) {
          const {
            displayName,
            email,
            phoneNumber,
            accessToken,
            photoURL,
            uid,
          } = user.auth.currentUser;
          console.log(userStore);
          traerInfo(uid,accessToken)

        

          
        }
      }
    });
  }, [setIsLoggedIn,check]);
  if (check) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SplashScreen/>} />
      <Route path='/Home' element={<Home isAuthentication={isLoggedIn} />}/>
      <Route path='/Login' element={<Login isAuthentication={isLoggedIn}/>}/>
      <Route path="/Dice" element={<Dice />} />
      <Route path='/Register' element={<Register isAuthentication={isLoggedIn}/>}/>
      <Route path='/Restaurants' element={<Restaurants/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router