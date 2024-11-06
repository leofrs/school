import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState("admin");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
