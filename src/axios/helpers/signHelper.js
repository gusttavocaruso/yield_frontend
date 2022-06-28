import sign from "../services/sign";

export const signUp = async (userPayload) => {
  try {
    const response = await sign.post('/sign-up', userPayload, null);
    console.log('signUP')
    console.log(response)
    return response;
  } catch (error) {
    const { data } = await error.response;
    return { message: data.message, status: data.status };
  }
};

export const signIn = async (userPayload) => {
  try {
    const response = await sign.post('/sign-in', userPayload, null);
    console.log('signIN');
    console.log(response );
    return response;
  } catch (error) {
    const { data } = await error.response;
    return { message: data.message, status: data.status };
  }
};
