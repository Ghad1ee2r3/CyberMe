import { SET_WEBSITES } from "./actionTypes";

import instance from "./instance";
export const fetchWebsites = (cardId) => async (dispatch) => {
  try {
    const res = await instance.get(`check-card/${cardId}/`);
    const websites = res.data;
    dispatch({
      type: SET_WEBSITES,
      payload: websites,
    });
  } catch (error) {
    console.error(error);
  }
};
