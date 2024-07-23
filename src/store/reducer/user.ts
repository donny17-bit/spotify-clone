const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  msg: "",
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case "USER_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: { ...action.payload.data.data },
        msg: action.payload.data.message,
      };

    case "USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.data.message,
      };

    default:
      return state;
  }
};

export default user;
