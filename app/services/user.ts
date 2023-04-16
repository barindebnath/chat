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
  } catch (err) {
    console.error('error >> ', err);
    return [null, err];
  }
};

export const signUp = async (first_name: string, last_name: string, email: string, password: string) => {
  try {
    const res = await fetch(`${config.apiBaseUrl}/user/signUp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ first_name, last_name, email, password })
    });
    const data = await res.json();
    return [data, null];
  } catch (err) {
    console.error('error >> ', err);
    return [null, err];
  }
};

export const logOut = async () => {
  try {
    const res = await fetch(`${config.apiBaseUrl}/user/logout`, {
      method: 'POST',
    });
    const data = await res.json();
    return [data, null];
  } catch (err) {
    console.error('error >> ', err);
    return [null, err];
  }
};
