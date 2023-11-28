

const CharInfoItem = () => {


    return (
        <>
        <div className="char__basics">
                    <img  alt='FAIL'/>
                    <div className="char__info-name">Name
                    <div className="char__btns">
                        <a href='#' className="button button__main">
                        <div className="inner">homepage</div>
                        </a>
                        <a href='#' className="button button__secondary">
                        <div className="inner">Wiki</div>
                        </a>
                    </div>
                    </div>
                    
                </div>
                <div className='char__descr'>DESCRIPTION</div>
       
      
            <div className='char__comics'>Comics:</div>
            <ul className='char__comics-list'>
                
                    <li key="какой то ключ" className='char__comics-item'>Название комикса</li>
                    <li key="какой то ключ" className='char__comics-item'>Название комикса</li>
                    <li key="какой то ключ" className='char__comics-item'>Название комикса</li>
            
            </ul>
      
        </>
                
    )
}

export default CharInfoItem;