import { getAllUser } from "./FetchApi";

export const fetchData = async (dispatch) => {
  dispatch({ type: "loading", payload: true });
  let responseData = await getAllUser();
  console.log(responseData);
  setTimeout(() => {
    if (responseData && responseData.Users) {
      dispatch({
        type: "fetchUsersAndChangeState",
        payload: responseData.Users,
      });
      dispatch({ type: "loading", payload: false });
    }
  }, 1000);
};
