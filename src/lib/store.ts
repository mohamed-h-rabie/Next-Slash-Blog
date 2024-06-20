import { configureStore } from "@reduxjs/toolkit";
import posts from "./features/posts/postsSlice";
import post from "./features/post/postSlice";
import createpost from "./features/createPost/createPostSlice";
export const store = configureStore({
  reducer: { posts, post, createpost },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
