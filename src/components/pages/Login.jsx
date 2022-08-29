import React, { useState, useEffect } from 'react'
import googleicon from '../../assets/images/icons/google-icon.svg'
import fbicon from '../../assets/images/icons/fb-icon.svg'
import openeye from '../../assets/images/icons/openeye.svg'
import closeeye from '../../assets/images/icons/closeeye.svg'


export default function Login() {

    const [user, setUser] = useState(true)
    const registration = () => {
        setUser(!user)
    }


    const [login, setLogin] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')

    const [loginFull, setLoginFull] = useState(false)
    const [nameFull, setNameFull] = useState(false)
    const [emailFull, setEmailFull] = useState(false)
    const [phoneFull, setPhoneFull] = useState(false)
    const [passwordFull, setPasswordFull] = useState(false)
    const [passwordAgainFull, setPasswordAgainFull] = useState(false)

    const [loginError, setLoginError] = useState('Bu xana boş qalmamalıdır.')
    const [nameError, setNameError] = useState('Bu xana boş qalmamalıdır.')
    const [emailError, setEmailError] = useState('')
    const [phoneError, setPhoneError] = useState('Bu xana boş qalmamalıdır.')
    const [passwordError, setPasswordError] = useState('Bu xana boş qalmamalıdır.')
    const [passwordAgainError, setPasswordAgainError] = useState('Bu xana boş qalmamalıdır.')

    // const [userCheck, setUserCheck] = useState(false)
    const [userCheckError, setUserCheckError] = useState('')


    const [formValid, setFormValid] = useState(false)




    const handleBlur = (a) => {
        switch (a.target.name) {
            case 'login':
                setLoginFull(true)
                break;

            case 'name':
                setNameFull(true)
                break;

            case 'email':
                setEmailFull(true)
                break;

            case 'phone':
                setPhoneFull(true)
                break;

            case 'password':
                setPasswordFull(true)
                break;

            case 'passwordAgain':
                setPasswordAgainFull(true)
                break;

            default: setFormValid(false)
        }
    }


    const handleLogin = (a) => {
        setLogin(a.target.value)
        if (a.target.value.length < 3) {
            setLoginError('Login 3 simvoldan qısa olmamalıdır.')
        }
        else {
            setLoginError()
        }
    }

    const handleName = (a) => {
        setName(a.target.value)
        if (a.target.value.length < 3) {
            setNameError('Ad ən azı 3 simvoldan ibarət olmalıdır.')
        }
        else {
            setNameError("")
        }
    }

    const handleEmail = (a) => {
        setEmail(a.target.value)
        const checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!checkEmail.test(String(a.target.value).toLowerCase())) {
            setEmailError('E-mail səhv formatda qeyd olunub.')
        }
        else {
            setEmailError('')
        }
    }

    const handlePhone = (a) => {
        setPhone(a.target.value)
        if (a.target.value.length < 10) {
            setPhoneError('Mobil nömrə 10 rəqəmdən qısa olmamalıdır.')
        }
        else {
            setPhoneError("")
        }
    }

    const handlePassword = (a) => {
        setPassword(a.target.value)
        if (a.target.value.length < 4) {
            setPasswordError('Şifrə 4 simvoldan qısa olmamalıdır.')
        }
        else if (a.target.value !== passwordAgain) {
            setPasswordError('Şifrələr eyni deyil.')
        }
        else {
            setPasswordError("")
        }
    }

    const handlePasswordAgain = (a) => {
        setPasswordAgain(a.target.value)
        if (a.target.value !== password) {
            setPasswordAgainError('Şifrələr eyni deyil.')
        }
        else {
            setPasswordAgainError("")
            setPasswordError("")
        }
    }

    const [eye1, setEye1] = useState(false)
    const showPassword1 = () => {
        setEye1(!eye1)
    }

    const [eye2, setEye2] = useState(false)
    const showPassword2 = () => {
        setEye2(!eye2)
    }

    const handleCheckbox = (e) => {
        console.log(e.target.checked);
        if (!e.target.checked){
            setUserCheckError('Not checked!')
        }
        else{
            setUserCheckError("")
        }
    }

    useEffect(() => {
        if (loginError || nameError || emailError || phoneError || passwordError || passwordAgainError || userCheckError) {
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    }, [loginError, nameError, emailError, phoneError, passwordError, passwordAgainError, userCheckError])



    return (

        <>
            <div className="loginpage">
                <div className="inpage">
                    <div className={user ? 'enterorlogin' : 'enterorlogin register'}>
                        <div className="enter">
                            <div className="entranceinfo">
                                <div className="top">
                                    <h1> Şəxsi Kabinet </h1>
                                    <h2 onClick={registration}> Qeydiyyatdan keç</h2>
                                </div>
                                <input
                                    type="text"
                                    placeholder='Login*'
                                    name='enterlogin'
                                />
                                <input
                                    type="password"
                                    placeholder='Şifrə*'
                                    name="enterpassword"
                                    id="password"
                                />
                                <span className='forgotpassword'> Şifrəni unutmusunuz? </span>
                                <div className="btns">
                                    <div className="socialacc">
                                        <img src={googleicon} alt="google icon" />
                                        <img src={fbicon} alt="facebook icon" />
                                    </div>
                                    <button> <i className="fa-solid fa-door-open"></i> </button>
                                </div>
                            </div>
                        </div>


                        <div className="login">
                            <form>
                                <div className="logininfo">
                                    <div className="top">
                                        <h1> Qeydiyyat </h1>
                                        <h2 onClick={registration}> Qeydiyyatım mövcuddur </h2>
                                    </div>

                                    <div className="infoinput">
                                        {(loginFull && loginError) && <span className='errorspan' style={{ color: 'red' }}> {loginError} </span>}
                                        <label htmlFor="userlogin"> Login * </label>
                                        <input
                                            type="text"
                                            name="login"
                                            id="userlogin"
                                            value={login}
                                            onBlur={a => handleBlur(a)}
                                            onChange={a => handleLogin(a)}
                                        />
                                    </div>

                                    <div className="infoinput">
                                        {(nameFull && nameError) && <span className='errorspan' style={{ color: 'red' }}> {nameError} </span>}
                                        <label htmlFor="username"> Ad, Soyad, Ata adı * </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="username"
                                            value={name}
                                            onBlur={a => handleBlur(a)}
                                            onChange={a => handleName(a)}
                                        />
                                    </div>

                                    <div className="infoinput">
                                        {(emailFull && emailError) && <span className='errorspan' style={{ color: 'red' }}> {emailError} </span>}
                                        <label htmlFor="useremail"> E-Mail </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="useremail"
                                            value={email}
                                            onBlur={a => handleBlur(a)}
                                            onChange={a => handleEmail(a)}
                                        />
                                    </div>

                                    <div className="infoinput">
                                        {(phoneFull && phoneError) && <span className='errorspan' style={{ color: 'red' }}> {phoneError} </span>}
                                        <label htmlFor="userphone"> Mobil nömrə * </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="userphone"
                                            required pattern='^[+]?[0-9]{9,12}$'
                                            value={phone}
                                            onBlur={a => handleBlur(a)}
                                            onChange={a => handlePhone(a)}
                                        />
                                    </div>

                                    <div className="infoinput">
                                        {(passwordFull && passwordError) && <span className='errorspan' style={{ color: 'red' }}> {passwordError} </span>}
                                        <label htmlFor="userpassword"> Şifrə * </label>
                                        <input
                                            type={eye1 ? 'text' : 'password'}
                                            name="password"
                                            id="userpassword"
                                            value={password}
                                            onBlur={a => handleBlur(a)}
                                            onChange={a => handlePassword(a)}
                                        />
                                        <div className="eye" onClick={showPassword1}>
                                            {
                                                eye1 ?
                                                    <img
                                                        src={openeye}
                                                        alt="openeye"
                                                    />
                                                    :
                                                    <img
                                                        src={closeeye}
                                                        alt="closeeye"
                                                    />
                                            }
                                        </div>
                                    </div>

                                    <div className="infoinput">
                                        {(passwordAgainFull && passwordAgainError) && <span className='errorspan' style={{ color: 'red' }}> {passwordAgainError} </span>}
                                        <label htmlFor="userpasswordagain"> Şifrəni təkrarla * </label>
                                        <input
                                            type={eye2 ? 'text' : 'password'}
                                            name="passwordAgain"
                                            id="userasswordagain"
                                            value={passwordAgain}
                                            onBlur={a => handleBlur(a)}
                                            onChange={a => handlePasswordAgain(a)}
                                        />
                                        <div className="eye" onClick={showPassword2}>
                                            {
                                                eye2 ?
                                                    <img
                                                        src={openeye}
                                                        alt="openeye"
                                                    />
                                                    :
                                                    <img
                                                        src={closeeye}
                                                        alt="closeeye"
                                                    />
                                            }
                                        </div>
                                    </div>

                                    <div className="captcha">
                                        Captcha
                                    </div>

                                    <div className="chechboxdiv">
                                        <input
                                            type="checkbox"
                                            name="check"
                                            id="usercheck"
                                            //   checked={setUserCheck(true)}
                                            onChange={(e) => handleCheckbox(e)}
                                        />
                                        <label htmlFor="usercheck" id='userlabel'>
                                            <div className="bounce">
                                                <div className="ball"></div>
                                            </div>
                                            <a href="http://localhost:3000/privacypolicy" target='_blank' rel="noopener noreferrer">
                                                Məxfilik siyasəti
                                            </a>
                                            və
                                            <a href="http://localhost:3000/termsofsale" target='_blank' rel="noopener noreferrer">
                                                satış qaydaları
                                            </a>
                                            ilə razıyam.
                                        </label>
                                    </div>

                                    <button disabled={!formValid}>
                                        Qeydiyyatı tamamla
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
