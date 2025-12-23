import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./translation/i18n";
// Supports weights 100-900
import "@fontsource-variable/outfit";

createRoot(document.getElementById("root")).render(<App />);
