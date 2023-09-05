import axios from "axios";

const initialState = { loading: false, articles: [] };

export const requestArticles = async (dispatch) => {
  dispatch({ type: "MEDIUM_LOAD" });
  const articles = await axios.get("/api/medium").then((res) => res.data);
  console.log("medium" , articles);

  dispatch({ type: "MEDIUM_ARTICLES", payload: articles });
};


export default function medium(state = initialState, action) {
  if (action.type === "MEDIUM_LOAD") {
    return { ...state, loading: true };
  } else if (action.type === "MEDIUM_ARTICLES") {
    return { ...state, loading: false, articles: action.payload };
  }
  return state;
};
