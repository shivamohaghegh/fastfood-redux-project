import axios from "axios";
import NavbarActionTypes from "./NavbarActionTypes";

const { SET_NAVBAR, SET_NAVBAR_LOADING, SET_NAVBAR_ERROR } = NavbarActionTypes;

export const fetchNavbarItems = () => {
  return async (dispatch) => {
    const baseUrl = "https://6844019c71eb5d1be032236c.mockapi.io/FoodCategory";
    dispatch({ type: SET_NAVBAR_LOADING, payload: true });
    try {
      const response = await axios.get(baseUrl);
      dispatch({ type: SET_NAVBAR, payload: response.data });
    } catch (error) {
      dispatch({ type: SET_NAVBAR_ERROR, payload: error.message });
    } finally {
      dispatch({ type: SET_NAVBAR_LOADING, payload: false });
    }
  };
};
