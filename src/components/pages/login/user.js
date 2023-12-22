import './user.scss';
import userAlt from './userAlt.jpg';

const User = () => {
    const user = {
        userImg: '',
        firstName: 'Alex',
        lastName: 'Mercer',
        email: 'simple@example.com',
    }

    const renderUser = (user) => {

        return (
            
                <div className="user">
                 <img className="user__image" alt={userAlt}/>
                 <h1 className="user__FirstName">{user.firstName}, {user.lastName}</h1>

            </div>
       
        )
    }


    return (
        <div style={{paddingTop: '90px'}}>
            {renderUser(user)}
        </div>
       
    )
}

export default User;