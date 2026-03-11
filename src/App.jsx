import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import SubscribePage from "./pages/subscription/SubscribePage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import ProvinceDetailPage from "./pages/ProvinceDetailsPage";
import WatchPage from "./pages/WatchPage";
import PlaceDetails from "./pages/PlaceDetails";
import ProfilePage from "./pages/ProfilePage";
import AdminDashboard from "./pages/admin/AdminDashboard";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/province/:province/:category"
            element={<ProvinceDetailPage />}
          />
          <Route
            path="/province/:province/tourism/:slug"
            element={<PlaceDetails />}
          />
          <Route path="/watch/:id" element={<WatchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
