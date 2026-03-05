import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

const removeEmergentBadge = () => {
  const byId = document.getElementById("emergent-badge");
  if (byId) byId.remove();

  const links = document.querySelectorAll('a[href*="emergent.sh"], a[href*="utm_source=emergent-badge"]');
  links.forEach((el) => {
    if (el?.textContent?.toLowerCase().includes("made with emergent")) {
      el.remove();
    }
  });
};

removeEmergentBadge();
const observer = new MutationObserver(removeEmergentBadge);
observer.observe(document.documentElement, { childList: true, subtree: true });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
