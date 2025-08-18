import React from "react";
import "./i18n"; // <- import i18n config once
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;