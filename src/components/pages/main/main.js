import RandomChar from "./random-char/random-char";
import '../main/main.scss';

const Main = () => {


    return (
        <div className='main'>
            <h1 style={{textAlign: 'center', marginBottom: '15px'}}>Hello Friend</h1>
                <RandomChar />
         
            
           
       </div>
    )
}

export default Main