import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import Login from "./pages/Login";
import { Provider } from 'react-redux'
import {store} from "./app/store";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={ <AuthLayout /> } >
            <Route index element={ <Login /> } />
            <Route path="register" element={ <Register /> } />
          </Route>
        </Routes>
      </Provider>
      </BrowserRouter>
  );
}

export default App;
