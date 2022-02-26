import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./MainScreen";
import LoginScreen from "./LoginScreen";
// Global Style
import GlobalStyle from "../globalStyles/GlobalStyles";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const user = null;

  return (
    <div className="app">
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          {!user ? (
            <Routes>
              <Route path="/welcome" element={<LoginScreen />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<MainScreen />} />
            </Routes>
          )}
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
