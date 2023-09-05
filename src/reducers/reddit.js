import axios from "axios";

const initialState = { loading: false, articles: [] };

export const requestArticles = async (dispatch) => {
  dispatch({ type: "REDDIT_LOAD" });
  const articles = await axios.get("/api/reddit").then((res) => res.data);
  console.log("reddit" , articles);

  dispatch({ type: "REDDIT_ARTICLES", payload: articles });
};


export default function reddit(state = initialState, action) {
  if (action.type === "REDDIT_LOAD") {
    return { ...state, loading: true };
  } else if (action.type === "REDDIT_ARTICLES") {
    return { ...state, loading: false, articles: action.payload };
  }
  return state;
}
