


const LoginUser = ({onClick, getUsersData, HandleSubmit}) => {

    

    return (
        <form className='form' onSubmit={(e) => HandleSubmit(e)}><h2 className='form__title'>LOGIN</h2>
            <label className='input'>
                    <input type='text' placeholder='enter name' name='login' onChange={getUsersData}/>
                </label>
                <label className='input'>
                    <input type='text' placeholder='enter password' name='password' onChange={getUsersData}/>
            </label>
            <button className='form__button'>Login</button>
            <p>I dont have any account, 
                <span 
                onClick={() => onClick()} className="form__span"> create new account</span>.
            </p>
        </form>
    )
}

export default LoginUser;