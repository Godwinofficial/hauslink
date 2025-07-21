import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AuthLayout";
import ListerLayout from "./components/ListerLayout";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";

// Lister Pages
import ListerLogin from "./pages/lister/Login";
import ListerRegister from "./pages/lister/Register";
import EmailVerification from "./pages/lister/EmailVerification";
import ListerForgotPassword from "./pages/lister/ForgotPassword";
import Dashboard from "./pages/lister/Dashboard";
import AddProperty from "./pages/lister/AddProperty";
import Listings from "./pages/lister/Listings";
import Analytics from "./pages/lister/Analytics";
import Inquiries from "./pages/lister/Inquiries";
import Profile from "./pages/lister/Profile";
import Settings from "./pages/lister/Settings";
import EditProperty from "./pages/lister/EditProperty";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

          {/* Lister Routes */}
          <Route path="/lister">
            <Route path="login" element={<ListerLogin />} />
            <Route path="register" element={<ListerRegister />} />
            <Route path="verify-email" element={<EmailVerification />} />
            <Route path="forgot-password" element={<ListerForgotPassword />} />
            <Route element={<ListerLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="add-property" element={<AddProperty />} />
              <Route path="listings" element={<Listings />} />
              <Route path="listings/:id/edit" element={<EditProperty />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="inquiries" element={<Inquiries />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>

          {/* Main Routes with Header and Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
