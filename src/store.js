import { configureStore } from "@reduxjs/toolkit";
import hackerNews from "./reducers/hackerNews.js";
import medium from "./reducers/medium.js";
import reddit from "./reducers/reddit.js";

export default configureStore({
  reducer:{reddit:reddit, medium:medium, hackerNews:hackerNews, }
})