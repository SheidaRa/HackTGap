import { configureStore } from '@reduxjs/toolkit';

import selectedCategoryReducer from './reducers/selectedCategoryReducer';

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
    // Automatically calls `combineReducers`
    reducer: {
        selectedCategory: selectedCategoryReducer
    }
});

export default store;