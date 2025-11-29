import { configureStore, combineReducers } from '@reduxjs/toolkit'
import questionSlice from './slices/question.slice'
import leaderboardSlice from './slices/leaderboard.slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // or other storage options like localStorage, sessionStorage

const persistConfig = {
  key: 'root', // Key for the persisted state in storage
  version: 1, // Version of your persisted state, useful for migrations
  storage, // The storage engine to use
  // Optional: whitelist or blacklist specific reducers to persist/not persist
  // whitelist: ['question'], 
  // blacklist: ['tempData']
};

const rootReducer = combineReducers({
  question: questionSlice,
  leaderboard: leaderboardSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch