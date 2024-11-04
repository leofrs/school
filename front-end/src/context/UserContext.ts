import { createContext } from "react";

interface Context {
	user: string;
	setUser: (user: string) => void;
}

export const UserContext = createContext<Context>({
	user: "",
	setUser: () => {},
});
