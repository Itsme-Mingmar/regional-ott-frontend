import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import SubscribePage from "./pages/subscription/SubscribePage";
import SignInPage from "./pages/SignInPage";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
