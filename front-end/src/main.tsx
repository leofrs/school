import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { UserProvider } from "./context/UserProvider.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
	<UserProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</UserProvider>
);
