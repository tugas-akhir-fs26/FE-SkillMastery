// auth.reducer.js

const initialState = {
    isLogin: false,
    avatar: null,
    // ... state lain yang berhubungan dengan autentikasi
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN":
        localStorage.setItem("isLogin", true);
        return { ...state, isLogin: true };
      case "LOGOUT":
        localStorage.removeItem("isLogin");
        return { ...state, isLogin: false };
      case "Avatar" :
        return {...state, avatar : action.payload}
      default:
        return state;
    }
  };
  
  // Action Creators
  export const loginAction = () => ({ type: "LOGIN" });
  export const logoutAction = () => ({ type: "LOGOUT" });
  export const setAvatarAction = (avatar) => ({ type: "Avatar", payload: avatar });
  