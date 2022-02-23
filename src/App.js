import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import LoginScreen from "./components/LoginScreen";
// Global Style
import GlobalStyle from "./globalStyles/GlobalStyles";

function App() {
  const user = null;

  return (
    <div className="app">
      <GlobalStyle />
      <BrowserRouter>
        {!user ? (
          <Routes>
            <Route path="/welcome" element={<LoginScreen />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<MainScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
