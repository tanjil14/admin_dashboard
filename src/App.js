import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext.js";
import { productInputs, userInputs } from "./formData.js";
import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List.jsx";
import Login from "./pages/login/Login.jsx";
import New from "./pages/new/New.jsx";
import Single from "./pages/single/Single.jsx";
import "./style/dark.scss";
function App() {
  const {darkMode}=useContext(DarkModeContext);
 
  return (
    <div className={darkMode?"app dark":"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputData={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New inputData={productInputs} title="Add New Product" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
