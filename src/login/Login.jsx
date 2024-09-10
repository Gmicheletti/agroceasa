import './Login.css'

export  function Login() {

    return (
      <section id='sectionLogin'>
        <div className='loginLeft'>
            <img id='loginBG' src="./img/bgLogin.jpg" alt="" />
            <img id='loginLogoG' src="./img/agroG.svg" alt="" />
        </div>
        <div  className='loginRight'>
            <img src="./img/logoAC.svg" alt="" />
            <input className='inputStd' placeholder='email' type="email" />
            <input className='inputStd' placeholder='senha' type="password" />
            <button  className='btn1'>Entrar</button>
            <p id='recSenha'>Esqueci minha senha</p>
        </div>
      </section>
    )
  }
  