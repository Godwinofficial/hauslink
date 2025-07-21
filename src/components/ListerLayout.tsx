import { useState } from "react";
import { Link, Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Plus,
  ListFilter,
  BarChart2,
  MessageSquare,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  Home,
} from "lucide-react";

const ListerLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check authentication status from localStorage
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/lister/login" state={{ from: location }} replace />;
  }

  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/lister/login");
  };

  const navigation = [
    { name: "Dashboard", href: "/lister/dashboard", icon: LayoutDashboard },
    { name: "Add Property", href: "/lister/add-property", icon: Plus },
    { name: "My Listings", href: "/lister/listings", icon: ListFilter },
    { name: "Analytics", href: "/lister/analytics", icon: BarChart2 },
    { name: "Inquiries", href: "/lister/inquiries", icon: MessageSquare },
    { name: "Settings", href: "/lister/settings", icon: Settings },
  ];

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with Logo and Sign Out */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/lister/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">HausLink</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 pb-24 md:pb-0">
        <Outlet />
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-0">
          <ul className="flex justify-between md:justify-center md:space-x-8">
            {navigation.map((item) => (
              <li key={item.name} className="flex-1">
                <Link
                  to={item.href}
                  className={`flex flex-col items-center justify-center py-2 text-xs font-medium transition-colors md:flex-row md:space-x-2 md:text-sm md:py-3 ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-5 w-5 mb-1 md:mb-0" />
                  <span className="hidden md:inline">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default ListerLayout; 