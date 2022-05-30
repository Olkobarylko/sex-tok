import Post from "./post/post";
import React from "react";

const Profile = (props) => {

    let newPostMassegeValue = React.createRef();

    let postsArray = props.profile.map(elem => (<Post name={elem.name}
    description={elem.postText}
    likes={elem.like} />));

    let addPost = () =>{
        props.addPost(newPostMassegeValue.current.value);
        newPostMassegeValue.current.value= '';
    }

    console.log(props.profile);

    return (
        <div>
            <textarea ref={newPostMassegeValue} name="" id="" cols="40" rows="4"></textarea>
            <br />
            <button onClick={addPost}>add post</button>
            {postsArray}
        </div>
    )
}

export default Profile;