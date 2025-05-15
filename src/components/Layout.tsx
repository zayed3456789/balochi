
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gray-100 border-b border-gray-300">
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif font-bold text-gray-800">Balochi Heritage</Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Main Page</NavLink>
            <NavLink to="/history">History</NavLink>
            <NavLink to="/culture">Culture</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-100 border-t border-gray-200">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Main Page</MobileNavLink>
              <MobileNavLink to="/history" onClick={() => setIsMenuOpen(false)}>History</MobileNavLink>
              <MobileNavLink to="/culture" onClick={() => setIsMenuOpen(false)}>Culture</MobileNavLink>
              <MobileNavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</MobileNavLink>
            </div>
          </div>
        )}
      </header>
      
      <main className={cn("flex-1 bg-gray-50", className)}>
        {children}
      </main>
      
      <footer className="bg-gray-200 border-t border-gray-300 text-gray-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="font-serif text-xl font-bold mb-2">Balochi Heritage</h2>
              <p className="text-sm max-w-md">Preserving and sharing the rich cultural heritage of the Balochi people through education and awareness.</p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold mb-2">Navigation</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/" className="text-sm text-blue-600 hover:underline">Main Page</Link>
                <Link to="/history" className="text-sm text-blue-600 hover:underline">History</Link>
                <Link to="/culture" className="text-sm text-blue-600 hover:underline">Culture</Link>
                <Link to="/gallery" className="text-sm text-blue-600 hover:underline">Gallery</Link>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-300 text-center text-sm">
            <p>© {new Date().getFullYear()} Balochi Heritage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link 
      to={to} 
      className="font-medium text-blue-600 hover:underline transition-colors"
    >
      {children}
    </Link>
  );
};

const MobileNavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
  return (
    <Link 
      to={to} 
      className="py-2 block font-medium text-blue-600 hover:underline px-2 rounded transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Layout;
