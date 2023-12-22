import {Link} from 'react-router-dom';
import RandomChar from "./random-char/random-char";
import '../main/main.scss';
import '../../portal/menuPortal'
import MenuPortal from "../../portal/menuPortal";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { showNotification } from "../../../redux/actions";
import PostBox from './postbox/postBox';
const Main = () => {

const dispatch = useDispatch();
const {isNotificationVisible} = useSelector(state => state.isNotificationVisible);

useEffect(() => {
    if(!isNotificationVisible) {
        const timer = setTimeout(() => {
            dispatch(showNotification());
        }, 25000);
        console.log('отрабатывает таймер')
        return () => clearInterval(timer);
    }
}, [isNotificationVisible, dispatch])
    return (
        <div className='main'>
            <h1 style={{textAlign: 'center', marginBottom: '15px'}}>Hello Friend!</h1>
            <p style={{textAlign:'center', fontSize: '26px'}}>Do you want see my Resume? please tap here.<Link to='/about'>About Me</Link></p>
                <RandomChar />
                <PostBox />
               {isNotificationVisible ? <MenuPortal /> : ''} 
       </div>
    )
}

export default Main