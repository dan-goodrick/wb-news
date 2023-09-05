import axios from "axios";

const initialState = { loading: false, articles: [] };

export const requestHNArticles = async (dispatch) => {
  dispatch({ type: "HN_LOADING" });
  const articles = await axios.get("/api/hacker-news").then((res) => res.data);
  dispatch({ type: "HN_REQUEST_ARTICLES", payload: articles });
};
export const requestMediumArticles = async (dispatch) => {
  dispatch({ type: "M_LOADING" });
  const articles = await axios.get("/api/medium").then((res) => res.data);
  dispatch({ type: "M_REQUEST_ARTICLES", payload: articles });
};

export default (state = initialState, action) => {
  if (action.type === "HN_LOADING") {
    return { ...state, loading: true };
  } else if (action.type === "HN_REQUEST_ARTICLES") {
    return { ...state, loading: false, articles: action.payload };
  } else if (action.type === "M_LOADING") {
    return { ...state, loading: true };
  } else if (action.type === "M_REQUEST_ARTICLES") {
    return { ...state, loading: false, articles: action.payload };
  }
  return state;
};
