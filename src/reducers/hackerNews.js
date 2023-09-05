import axios from "axios";

const initialState = { loading: false, articles: [] };

export const requestArticles = async (dispatch) => {
  dispatch({ type: "HACKER_LOAD" });
  const articles = await axios.get("/api/hacker-news").then((res) => res.data);
  dispatch({ type: "HACKER_ARTICLES", payload: articles });
};


export default function hackerNews(state = initialState, action) {
  if (action.type === "HACKER_LOAD") {
    return { ...state, loading: true };
  } else if (action.type === "HACKER_ARTICLES") {
    return { ...state, loading: false, articles: action.payload };
  }
  return state;
};
