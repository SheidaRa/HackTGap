const selectedTopic = (state = {}, action) => {
    switch (action.type) {
        case 'SET_TOPIC':
            return action.payload;
        case 'UNSET_TOPIC':
            return {};
        default:
            return state;
    }
};

export default selectedTopic;