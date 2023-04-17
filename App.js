import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import MainComponent from "./src/components/MainComponent";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default App;
