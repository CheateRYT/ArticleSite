import React from "react";
import { Provider } from "react-redux";
import configuredStore from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={configuredStore}>
      <div></div>
    </Provider>
  );
};

export default App;
