import { createContext, useState, useEffect } from "react";
import { api } from "../api";

const UserContext = createContext<any>(null);

function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  console.log(user);
  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/currentUser", {
        withCredentials: true,
      });
      setUser(response.data);
    }
    if (!user) {
      fetchUser();
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };