import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import Login from "./pages/Login";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <AuthLayout /> } >
          <Route index element={ <Login /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
