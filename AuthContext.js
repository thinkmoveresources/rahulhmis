import React, { useEffect, useState,createContext } from "react";
// Create a context
const AuthContext = createContext({});
const AuthProvider = ({ children }) => {    
    cosole.log(AsyncStorage.getItem("auth"));
  const [auth, setAuthState] = useState({
    phone: "9960089994", // User's phone number
    token: "iamtoken",
  });  
    const configureAxiosHeaders = (token, phone) => {
      axios.defaults.headers["X-Auth-Token"] = token;
      axios.defaults.headers["X-Auth-Phone"] = phone;
    };
    console.log("Reacheeeeeeeed")
  // Get current auth state from AsyncStorage
  const getAuthState = async () => {
    try {
      const authDataString = await AsyncStorage.getItem("userData");
      const authData = JSON.parse(authDataString || {});
      // Configure axios headers
      configureAxiosHeaders(authData.token, authData.phone);
      setAuthState(authData);
    } catch (err) {
      setAuthState({});
    }
  };

  // Update AsyncStorage & context state
  const setAuth = async (auth) => {
    try {
      await AsyncStorage.setItem("auth", JSON.stringify(auth));
      // Configure axios headers
      configureAxiosHeaders(auth.token, auth.phone);
      setAuthState(auth);
    } catch (error) {
      Promise.reject(error);
    }
  };

  useEffect(() => {
    getAuthState();
    alert(auth);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
