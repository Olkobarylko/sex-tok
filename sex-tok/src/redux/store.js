let store = {
    _state: {
        profile: {
            posts: [{
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
                }
            ],
            profileInputValue: 'yarik',
        }
    },
    
    getState() {
        return this._state;
    },
    _renderApp() {},
    addPost() {
        this._state.profile.posts.push({
            id: 4,
            name: 'user',
            postText: this._state.profile.profileInputValue,
            like: 0
        });
        this._state.profile.profileInputValue = '';
        this._renderApp();
    },
    changeProfileInput(text) {
        this._state.profile.profileInputValue = text;
        this._renderApp();
    },
    subscribe(observer) {
        this._renderApp = observer;
    }
}


export default store;