import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import IndexPage from "../pages/IndexPage";
import LoginPage from "../pages/LoginPage";
// Global Style
import GlobalStyle from "../globalStyles/GlobalStyles";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="app">
      {authIsReady && (
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route
              path="/"
              element={user ? <IndexPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <LoginPage />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
