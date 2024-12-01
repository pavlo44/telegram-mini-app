import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if (window.Telegram) {
      const tg = window.Telegram.WebApp;
      tg.ready(); // Notify Telegram that the app is ready
    }
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a Telegram Mini App powered by React.</p>
    </div>
  );
};

export default App;
