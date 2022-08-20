import axios from "axios";

const API_URL = "/api/users";

//REGISTER USER
const register = async (userData) => {
  const response = await axios.post(API_URL + "/register", userData);

  //checking if there is an response
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//LOGIN USER
const login = async (userData) => {
  const response = await axios.post(API_URL + "/login", userData);

  //checking if there is an response
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//LOGOUT USER
const logout = async () => {
  localStorage.removeItem("user");
};

//export
const authService = {
  register,
  logout,
  login,
};

export default authService;
