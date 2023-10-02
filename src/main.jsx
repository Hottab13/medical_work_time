import ReactDOM from "react-dom/client";
import { setDefaultOptions } from "date-fns";
import { Provider } from "react-redux";

import App from "./App.jsx";
import "./index.css";
import { ru } from "date-fns/locale";
import { store } from "./redux";

setDefaultOptions({ locale: ru });

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
