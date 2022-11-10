import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();
function AuthProvider(props) {
  const navigate = useNavigate();

  const register = async (data) => {
    await axios.post("http://localhost:4000/auth/register", data);
    navigate("/login");
  };

  const login = async (data) => {
    const result = await axios.post("http://localhost:4000/login", data);
    console.log(result);

    const token = result.data.token;
    localStorage.setItem("token", token);
    const userDataFromToken = jwtDecode(token);
    setState({ ...state, user: userDataFromToken });
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ register, login }}>
      {props.children}
    </AuthContext.Provider>
  );
}
const useAuth = () => React.useContext(AuthContext);
export { AuthProvider, useAuth };
