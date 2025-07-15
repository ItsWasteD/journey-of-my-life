import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import AdminPanel from "./admin/AdminPanel.js";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<App />} />
				<Route path="admin" element={<AdminPanel />} />
				<Route path="*" element={<App />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
