import React, { useState } from "react";

import "./App.css";
import CountdownPage from "./Pages/countdownPage";
import GamePage from "./Pages/GamePage";

function App() {
  const [countPage, setCountPage] = useState<boolean>(true);

  return (
    <>
      {countPage && (
        <CountdownPage
          onEvent={() => {
            setCountPage(false);
          }}
        />
      )}
      {!countPage && <GamePage />}
    </>
  );
}

export default App;
