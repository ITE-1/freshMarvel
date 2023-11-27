import '../spiner/spiner.scss'

const Spinner = () => {


    return (
        <div className='loader__display' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <span className="loader"></span>
        </div>
        
    )
}


export default Spinner;