const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  msg: "",
};

const userPlaylist = (state = initialState, action: any) => {
  switch (action.type) {
    case "USERPLAYLIST_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "USERPLAYLIST_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: { ...action.payload.data.data },
        msg: action.payload.data.message,
      };

    case "USERPLAYLIST_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.message,
      };

    default:
      return state;
  }
};

export default userPlaylist;
