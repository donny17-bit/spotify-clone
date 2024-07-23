const initialState = {
  data: [],
  // otherData: [], //other data if needed
  isLoading: false,
  isError: false,
  msg: "",
};

const auth = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "LOGIN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: { ...action.payload.data },
        msg: action.payload.data.message,
      };

    case "LOGIN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.data.message,
      };

    case "LOGOUT_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "LOGOUT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [],
        msg: "",
      };

    case "LOGOUT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };

    default:
      return state;
  }
};

export default auth;
