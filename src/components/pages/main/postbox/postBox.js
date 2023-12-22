

const PostBox = () => {

    const data = [
        {id: 1, title: 'Topic №1', body: "Sorry for the mistakes and poorly developed functions, most of the time I'm looking for the most optimal solutions."},
        {id: 2, title: 'Topic №2', body: "I'm already finished my Resume Components, you can see it at the page 'About'"}
    ]
const renderItem = ({title, body}) => {

    return(
        <li>
            <span>{title}</span>
            <p>{body}</p>
         </li>
    )
}


    return (
        <div className="postbox">
            <ul className="postbox__list">
                <li className="postbox__list__item"></li>
            </ul>

            {data.map((item) =>{
                return (
                    renderItem({...item})
                )
            } )}
        </div>
    )
}


export default PostBox;