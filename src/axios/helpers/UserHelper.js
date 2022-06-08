import userApi from "../services/userApi";

export const firstIn = async (userInfo) => {
  try {
    const response = await userApi.post('/first-setup', userInfo, null);
    console.log('chamou')
    return response;
  } catch (error) {
    const { data } = await error.response;
    return { message: data.message, status: data.status };
  }
};