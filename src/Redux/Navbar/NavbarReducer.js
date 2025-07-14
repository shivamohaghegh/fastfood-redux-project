import NavbarActionTypes from "./NavbarActionTypes";

const { SET_NAVBAR, SET_NAVBAR_LOADING, SET_NAVBAR_ERROR } = NavbarActionTypes;

const initialState = {
  navbarItems: [],
  navbarLoading: false,
  navbarError: null,
};

const NavbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAVBAR:
      return {
        ...state,
        navbarItems: action.payload,
      };
    case SET_NAVBAR_LOADING:
      return {
        ...state,
        navbarLoading: action.payload,
      };
    case SET_NAVBAR_ERROR:
      return {
        ...state,
        navbarError: action.payload,
      };
    default:
      return state;
  }
};

export default NavbarReducer;
