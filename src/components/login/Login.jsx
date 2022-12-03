import React, { useEffect } from "react";
import "./login.scss";
import logoFacebook from "../../assets/facebook (1).png";
import logoGoogle from "../../assets/logotipo-de-google-glass.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { actionLoginAsync } from "../../redux/actions/userActions";

const Login = ({ isAuthentication }) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const userStore = useSelector((store) => store.userStore);
  useEffect(() => {
    if (isAuthentication) {
      navigate('/')
      
    }
  }, [isAuthentication])
  
  // useEffect(() => {
  // console.log(userStore);
  // if (!userStore.name) {
  
  //   navigate('/login')
  //   console.log(userStore.name);
  // }
  // else{
  //   navigate('/')

  // }
  // }, [userStore])



  const {register, handleSubmit, formState: { errors } } = useForm()
  const sendInfo=(data)=>{
    console.log(data);
  dispatch(actionLoginAsync(data))
  }
  return (
    <div className="login">
      <section className="login__image">
        <figure>
          <img src="" alt="image" />
        </figure>
      </section>
      <article className="login__article">
        <h1 className="login__tittle">Iniciar sesión</h1>
        <form onSubmit={handleSubmit(sendInfo)} className="login__form">
          <label className="login__label">
            <section className="login__inputContainer">
              <input type="email" required className="login__input" {...register("email")} />
              <span className="login__span">Correo electrónico</span>
            </section>
            <section className="login__inputContainer">
              <input required type="password" className="login__input" {...register("password")}  />
              <span className="login__span">Contraseña</span>
            </section>
          </label>
        <button type="submit" className="login__buttonSesion">Iniciar sesión</button>
        </form>
        <p>
          ¿Aún no te has registrado?{" "}
          <Link to="/register" className="login__link">Regístrate aquí</Link>
        </p>
        <button className="login__facebook">
          <img src={logoFacebook} alt="Logo Facebook" className="login__icon" />{" "}
          Continuar con Facebook
        </button>
        <button className="login__google">
          <img src={logoGoogle} alt="Logo Google" className="login__icon" />{" "}
          Continuar con Google
        </button>
      </article>
    </div>
  );
};

export default Login;
