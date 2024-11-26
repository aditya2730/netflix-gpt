import axios from "axios";

export const initializeAuthListener = async () => {
  const userData = await axios.get("http://localhost:3001/profile/view", {
    withCredentials: true,
  });
  return userData;
};
