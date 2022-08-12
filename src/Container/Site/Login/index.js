import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faLock , faXmark } from '@fortawesome/free-solid-svg-icons'
import { LoginWrapper } from './styled'
import Button from '../../../Components/Common/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenLogin } from './selector';
import { closeLogin } from '../Actions';
function Login(){
    const isOpen = useSelector(isOpenLogin) 
    const dispatch = useDispatch()
    const handleCloseLogin = () => {
        dispatch(closeLogin())
    }
    if(!isOpen){
        return ""
    }
    return (
        <LoginWrapper>
            <div className="close">
                <FontAwesomeIcon icon={faXmark} onClick={handleCloseLogin} />
            </div>
            <h2>LOGIN</h2>
            <form action="">
                <div className="form-group">
                    {/* <div className='form-icon'>
                        <FontAwesomeIcon icon={faUser} />
                        <p>Username or email * </p>
                    </div> */}
                    <input type="text" placeholder='Login' />
                </div>
                <div className="form-group">
                    {/* <div className='form-icon'>
                        <FontAwesomeIcon icon={faLock} />
                        <p>Password * </p>
                    </div> */}
                    <input type="password" placeholder='Password' />

                </div>
                <div className="form-group">
                    <input type="checkbox" />
                    <span>Remember me</span>
                </div>
                <Button className="btn-overwrite">Login</Button> <br />
                <Link to="">Lost your Password ?</Link>
            </form>
        </LoginWrapper>
    )
}

export default Login;
