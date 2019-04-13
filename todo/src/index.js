import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
