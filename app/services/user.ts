import config from "../utils/config";

export const signIn = async (email: string, password: string) => {
  try {
    const res = await fetch(`${config.apiBaseUrl}/user/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    return [data, null];
  } catch (err) { return [null, err] }
};