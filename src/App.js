import "./App.css";
import AppRouter from "./router";
import { Provider } from "react-redux";
import  store  from "./redux/store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
