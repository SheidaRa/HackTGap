import { configureStore } from '@reduxjs/toolkit';

import selectedCategoryReducer from './reducers/selectedCategoryReducer';
import selectedTopicReducer from './reducers/selectedTopicReducer';

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
    // Automatically calls `combineReducers`
    reducer: {
        selectedCategory: selectedCategoryReducer,
        selectedTopic: selectedTopicReducer
    }
});

export default store;