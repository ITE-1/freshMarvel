

const RegisterUser = ({onClick}) => {



    return (

        <form className='form'> <h2>Register</h2>
            <label className='input'>
                    <input type='text' placeholder='enter name' name='login' />
                </label>
                <label className='input'>
                    <input type='text' placeholder='enter password' name='password' />
                </label>
                <button className="form__button">Create New Account</button>
                <p>I am already have an <span 
                    onClick={() => onClick()}
                    className="form__span">account!</span></p>
        </form>
    )
}


export default RegisterUser;