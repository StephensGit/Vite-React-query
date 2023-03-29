const api = `http://localhost:4000/api/users/login`;

const FetchLogin = async ({ email, password }) => {
  const response = await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error(`Login failed`);
  }
  const data = await response.json();

  return data;
};

export default FetchLogin;
