// {id, name, description, thumbnail, homepage,wiki,comics}

const RandomcharBlock = ({id, name, thumbnail,description}) => {

return (
    <div className='randomchar__block'>
        <img alt='FAIL' className='randomchar__img' src={thumbnail}/>
        <div className='randomchar__info'>
                <p className='randomchar__name'>{name}</p>
                <p className='randomchar__dscr'>{description}</p>
                <div className='randomchar__btns'>
                    <a className='button button__main' href="#">
                    <div className='inner'>Homepage</div>
                    </a>
                    <a className='button button__secondary' href="#">
                    <div className='inner'>WIKI</div>
                    </a>
                </div> 
         </div>
    </div>
)
    
}

export default RandomcharBlock;