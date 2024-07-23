import axios from "../../utils/axiosApiSpotify";

export const getCompanyById = (id: any) => {
  return {
    type: "GET_COMPANY_BY_ID",
    // payload: axios.get(`user/${id}`),
    payload: axios.get(`/company/${id}`),
  };
};
