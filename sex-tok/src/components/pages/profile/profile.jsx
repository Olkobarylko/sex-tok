import Post from "./post/post";
import React from "react";

const Profile = (props) => {

    let newPostMassegeValue = React.createRef();
    let postsArray = props.profile.posts.map(elem => (<Post name={elem.name}
    description={elem.postText}
    likes={elem.like} />));


    let addPost = () =>{
        props.addPost();
    }

    let checkValue = () =>{
        props.changeProfileInput(newPostMassegeValue.current.value)
    }

    console.log(props.profile);

    return (
        <div>
            <textarea onChange={checkValue} ref={newPostMassegeValue} value={props.profile.profileInputValue}></textarea>
            <br />
            <button onClick={addPost}>add post</button>
            {postsArray}
        </div>
    )
}

export default Profile;