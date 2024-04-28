const selectedCategory = (state = {}, action) => {
    switch (action.type) {
        case 'SET_CATEGORY':
            return action.payload;
        case 'UNSET_CATEGORY':
            return {};
        default:
            return state;
    }
};

export default selectedCategory;