import { useEffect, useState } from 'react';
import '../portal/menuPortal.scss'
import { useSelector, useDispatch } from 'react-redux';
import { hideNotification, showNotification } from '../../redux/actions';

const MenuPortal = () => {
   
    
    const isNotificationVisible = useSelector(state => state.isNotificationVisible.isNotificationVisible);
    const dispatch = useDispatch();
   

    useEffect(() => {
        if(isNotificationVisible) {
            const timer = setTimeout(() => {
                dispatch(hideNotification());
            }, 7000);
            console.log('отрабатывает таймер')
            return () => clearInterval(timer);
        }
    },[isNotificationVisible, dispatch])

    return (
      
        <div style={{position: 'fixed', top: '12%'}} >
           <svg 
            width='20px'
            data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path className='arrow-up' d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/></svg>
          
             <div className={`menu__portal ${isNotificationVisible ? 'show' : 'hide'}`}>
                <h1 className='menu__portal__title' onClick={() => dispatch(hideNotification())}>Tap here to open menu</h1>
            </div>
        </div>
       
    )
}

export default MenuPortal;