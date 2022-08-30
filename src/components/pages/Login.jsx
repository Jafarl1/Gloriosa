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

    const [loginError, setLoginError] = useState('This cell should not be left empty.')
    const [nameError, setNameError] = useState('This cell should not be left empty.')
    const [emailError, setEmailError] = useState('')
    const [phoneError, setPhoneError] = useState('This cell should not be left empty.')
    const [passwordError, setPasswordError] = useState('This cell should not be left empty.')
    const [passwordAgainError, setPasswordAgainError] = useState('This cell should not be left empty.')

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
            setLoginError('Login must not be shorter than 3 characters.')
        }
        else {
            setLoginError()
        }
    }

    const handleName = (a) => {
        setName(a.target.value)
        if (a.target.value.length < 3) {
            setNameError('Name must not be shorter than 3 characters.')
        }
        else {
            setNameError("")
        }
    }

    const handleEmail = (a) => {
        setEmail(a.target.value)
        const checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!checkEmail.test(String(a.target.value).toLowerCase())) {
            setEmailError('E-mail was entered in the wrong format.')
        }
        else {
            setEmailError('')
        }
    }

    const handlePhone = (a) => {
        setPhone(a.target.value)
        if (a.target.value.length < 10) {
            setPhoneError('Phone number must not be shorter than 10 characters.')
        }
        else {
            setPhoneError("")
        }
    }

    const handlePassword = (a) => {
        setPassword(a.target.value)
        if (a.target.value.length < 4) {
            setPasswordError('Password must not be shorter than 4 characters.')
        }
        else if (a.target.value !== passwordAgain) {
            setPasswordError('Passwords are not the same.')
        }
        else {
            setPasswordError("")
        }
    }

    const handlePasswordAgain = (a) => {
        setPasswordAgain(a.target.value)
        if (a.target.value !== password) {
            setPasswordAgainError('Passwords are not the same.')
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
                                    <h1> Sign in </h1>
                                    <h2 onClick={registration}>Sign up</h2>
                                </div>
                                <input
                                    type="text"
                                    placeholder='Login*'
                                    name='enterlogin'
                                />
                                <input
                                    type="password"
                                    placeholder='Password*'
                                    name="enterpassword"
                                    id="password"
                                />
                                <span className='forgotpassword'> Forgot your password? </span>
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
                                        <h1> Register </h1>
                                        <h2 onClick={registration}> Sign in </h2>
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
                                        <label htmlFor="username"> Name, Surname * </label>
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
                                        <label htmlFor="userphone"> Phone number * </label>
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
                                        <label htmlFor="userpassword"> Password * </label>
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
                                        <label htmlFor="userpasswordagain"> Repeat password * </label>
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
                                            I agree with
                                            <a href="http://localhost:3000/privacypolicy" target='_blank' rel="noopener noreferrer">
                                                Privacy Policy
                                            </a>
                                            and
                                            <a href="http://localhost:3000/termsofsale" target='_blank' rel="noopener noreferrer">
                                                Terms of Sale
                                            </a>
                                        </label>
                                    </div>

                                    <button disabled={!formValid}>
                                        Register
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
