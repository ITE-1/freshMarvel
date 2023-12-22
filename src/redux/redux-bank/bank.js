import './bank.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setRegisterStatus, setLoginStatus } from '../../../../redux/actions';
import LoginUser from './login/login';
import RegisterUser from './login/register';
import './login/login.scss';
import Operations from './accounts/operations/operations';

const Bank = () =>{

const [value, setValue] = useState('');
const [isLogged, setIsLogged] = useState(false);
const [loginUser, setLoginUser] = useState({
    login: "login",
    password: "123"
})
////////////////
const dispatch = useDispatch();
const isRegister = useSelector((state) => state.characters.isRegister)
const users = useSelector(state => state.characters.users)

///////////////

/////////////
const HandleSubmit = (e) => {
    e.preventDefault();
    const {login, password} = e.target.elements;
    const loginUser = {login: login.value, password: password.value};
    const isUserRegistered = checkUsersCredentials(loginUser);
    if (isUserRegistered) {
      console.log('User successfully logged in!',loginUser,isUserRegistered);
      console.log(isLogged,isRegister)
    } else {
      console.log('Invalid login credentials!',loginUser,isUserRegistered );
    }
}
////
const checkUsersCredentials = (login, password) => {

   
    if(login === loginUser.login && password === loginUser.password)
    {
        dispatch({type: "SET_LOGIN", payload: loginUser})
        return true
    } else {
        console.log(login, password, loginUser)
        return false
    }
        
   
}


const getUsersData = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setLoginUser({...loginUser, [name]: value});
    console.log(loginUser)
    // if(user.login === 'login' && user.password === '123') {
    //     console.log('login complete')
    // }
}
const renderOperation = isRegister && isLogged ? <Operations /> : 'PLEASE REGISTER OR LOGIN';
const LoginPlease = isLogged ? '' : <LoginUser getUsersData={getUsersData} HandleSubmit={HandleSubmit}/> ;


    return (
        <div className='bank'>
            <button onClick={() => console.log('login',isLogged,isRegister,'Register',users )}>ss</button>
            {/* {isLogged ? <RegisterUser onClick={changeActivity}/> : <LoginUser onClick={changeActivity} getUsersData={getUsersData} HandleSubmit={HandleSubmit}/>}
            {renderOperation} */}
         {LoginPlease}
         {renderOperation}
        </div>
        
    )
}

export default Bank;