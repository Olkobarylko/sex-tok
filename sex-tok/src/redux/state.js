let state = {
    profile: [{
            id: 1,
            name: 'Ivan',
            postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nihil delectus ad magnam corrupti sit facere ipsam dolor porro commodi.',
            like: 12
        },
        {
            id: 2,
            name: 'Petro',
            postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nihil delectus ad magnam corrupti sit facere ipsam dolor porro commodi.',
            like: 15
        },
        {
            id: 3,
            name: 'Vasya',
            postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A nihil delectus ad magnam corrupti sit facere ipsam dolor porro commodi.',
            like: 18
        },
    ]
}

export let addPost = (newPostMessage) => {
    state.profile.push({
        id: 4,
        name: 'user',
        postText: newPostMessage,
        like: 0
    })
    console.log(state, 'state')
}

const subscribe = () =>{
    
}

export default state;