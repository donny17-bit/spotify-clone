const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  msg: "",
};

const userArtist = (state = initialState, action: any) => {
  switch (action.type) {
    case "USERARTIST_PENDING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "USERARTIST_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: { ...action.payload.data.data },
        msg: action.payload.data.message,
      };

    case "USERARTIST_REJECTED":
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

export default userArtist;
