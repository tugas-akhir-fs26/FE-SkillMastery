// auth.reducer.js

const initialState = {
    isLogin: false,
    // ... state lain yang berhubungan dengan autentikasi
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, isLogin: true };
      case "LOGOUT":
        return { ...state, isLogin: false };
      // ... penanganan aksi autentikasi lainnya
      default:
        return state;
    }
  };
  
  // Action Creators
  export const loginAction = () => ({ type: "LOGIN" });
  export const logoutAction = () => ({ type: "LOGOUT" });
  // ... action creators lainnya
  