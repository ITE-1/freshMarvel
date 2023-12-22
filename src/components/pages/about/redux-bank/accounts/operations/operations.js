import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import BalanceDisplay  from '../BalanceDisplay';

const Operations = () => {

    const addCash = () => { 
        dispatch({type:"ADD_CASH", payload: Number(value)});
        console.log('отрабатывает');
        console.log(value)
    }
    const getCash = () => {
        dispatch({type: "WITHDRAW_CASH", payload: Number(value)})
    }
    const [value, setValue] = useState('');

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.cash);

    return (
        <div className='operations'>
        <h2>counter: <BalanceDisplay /></h2>
           <label className='input'>
               <input 
               onChange={(e) => setValue(e.target.value)}
               type="number" 
               placeholder="type to ADD" 
             />
               <button onClick={addCash}>ADD</button>
           </label>
           <label className='input'>
               <input 
               onChange={(e) => setValue(e.target.value)}
               type="number" 
               placeholder="type to WITHDRAW" />
               <button onClick={getCash}>GET</button>
           </label>
       
       </div>
    )
}

export default Operations;