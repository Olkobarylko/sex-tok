import Post from "./post/post";

const Profile = () => {
    return (
        <div>
            profile
            <Post name="Ivan" 
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nihil delectus ad magnam corrupti sit facere ipsam dolor porro commodi."
             likes="12"/>
            <Post name="Petro"
             description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui est quia sunt tenetur delectus deleniti laudantium alias quisquam dolorum nostrum?"
              likes="15"/>
            <Post name="Vasya" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, cupiditate veniam ipsum distinctio provident commodi necessitatibus reprehenderit neque ducimus repellat."
             likes="18"/>
        </div>
    )
}

export default Profile;