import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPath";

export const loginUser = async ({ email, password }) => {
  const res = await axiosInstance.post(API_PATHS.AUTH.LOGIN, { email, password });
  return res.data; // { id, role, name, token }
};

export const registerUser = async ({ role, name, email, password }) => {
  const res = await axiosInstance.post(API_PATHS.AUTH.REGISTER, { role, name, email, password });
  return res.data; // { id, role, token }
};

export const getProfile = async () => {
  const res = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
  return res.data; // user object
};
