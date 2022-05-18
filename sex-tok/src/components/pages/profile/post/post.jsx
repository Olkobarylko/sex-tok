import style from './post.module.css'

const Post = (props) => {
    return (
        <div className={style.wrapper}>
            <h2 className={style.name}>{props.name}</h2>
            <p className={style.description}>{props.description}</p>
            <button className={style.btn}>Like! {props.likes}</button>
        </div>
    )
}


export default Post;