import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import UserLayout from "./layouts/UserLayout";
import Login from "./pages/Login";
import { Provider } from 'react-redux'
import {store} from "./app/store";
import Register from "./pages/Register";
import Users from "./components/Users";
import User from "./components/User";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={ <AuthLayout /> } >
            <Route index element={ <Login /> } />
            <Route path="registro" element={ <Register /> } />
          </Route>
          < Route path="/usuario" element={ <UserLayout /> } >
            <Route index element={ <Users /> } />
            <Route path="crear-usuario" element={ <CreateUser /> } />
            <Route path=":id" element={ <User /> } />
            <Route path="editar/:id" element={ <EditUser /> } />
          
          </Route>
        </Routes>
      </Provider>
      </BrowserRouter>
  );
}

export default App;
