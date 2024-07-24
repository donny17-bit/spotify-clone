const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  msg: "",
};

const featuredPlaylist = (state = initialState, action: any) => {
  switch (action.type) {
    case "FEATURED_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "FEATURED_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: { ...action.payload.data.data },
        msg: action.payload.data.message,
      };

    case "FEATURED_REJECTED":
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

export default featuredPlaylist;
