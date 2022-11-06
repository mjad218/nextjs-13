import { API_URL } from "../../config";

const getAuthenticated = async (sid?) => {
  let res = await fetch(API_URL + "auth/login", {
    credentials: "include",
    mode: "cors",
    headers: {
      // Cookie: `sid=${sid}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw res.statusText;
  }
  const user = await res.json();
  return user;
};

export default getAuthenticated;
