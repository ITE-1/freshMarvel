



const LoginPage = ({login, password, email}) => {


    return (
        <div className="login__window">
            <form className="form login">
                <label className="form__label">
                    <span>Login: </span>
                    <input className="form__input" type="text" placeholder="enter your login" required/>
                </label>
               <label className="form__label">
                    <span>Password: </span>
                    <input className="form__input" type="password" placeholder="enter your password" required/>
               </label>
              
                <p>I dont't have an account, yet.<a href="#"> Register me!</a></p>
                <button onClick={() => console.log(login, password, 'отрабатывает')}>Submit</button>
            </form>
        </div>
    )
}

export default LoginPage;