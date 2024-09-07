import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux";
import store from "./app/store";
import DismissableToast from "./components/comman/DismissableToast";

function App() {

  return <Provider store={store}>
    <DismissableToast />
    <RouterProvider router={router} /></Provider>;
}

export default App;

