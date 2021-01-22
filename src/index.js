import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/reducer.js";

const initialState = {
  value: 0,
  kundvagn: {
    previous: [],
    lastAdded: [],
    lastDeleted: [],
    total: 0,
  },
  produkter: {
    past: [],
    present: [
      { namn: "Table Plus", pris: 2000, antal: 4 },
      {
        namn: "Table Extra",
        pris: 3000,
        antal: 5,
      },
      {
        namn: "Table Family",
        pris: 5000,
        antal: 2,
      },
      {
        namn: "Table Work",
        pris: 6000,
        antal: 2,
      },
      {
        namn: "Table IDEA",
        pris: 2500,
        antal: 4,
      },
      {
        namn: "Table One",
        pris: 1200,
        antal: 4,
      },
    ],
    future: [],
  }, //produkter som finns
  history: [],
  tab: ["products"],
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
