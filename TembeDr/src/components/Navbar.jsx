import { BookOpen, GraduationCap, House, InfoIcon, Menu, MessageCircleHeart, ShoppingCart, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import DarkMode from "./mode/Darkmode";

const NAVIGATION_ITEMS = [
  { icon: House, label: 'Home', path: '/' },
  { icon: ShoppingCart, label: 'Book', path: '/book' },
  { icon: BookOpen, label: 'Learn', path: '/learn' },
  { icon:Sparkles, label: 'Specials', path: '/specials' },
  { icon: GraduationCap, label: 'Graduates', path: '/graduates' },
  { icon: InfoIcon, label: 'About Us', path: '/about' },
  { icon: MessageCircleHeart, label: 'Reviews', path: '/reviews' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scroll when menu is open
    document.body.style.overflow = isMenuOpen ? 'unset' : 'hidden';
  };

  // Navigation item component for reuse
  const NavigationItem = ({ Icon, label, path, isMobile = false }) => (
    <Link
      to={path}
      onClick={isMobile ? toggleMenu : undefined}
      className={`flex items-center gap-2 transition-colors duration-200 hover:text-yellow-500
        ${isMobile ? 'text-2xl p-4' : 'text-lg'}`}
    >
      <Icon className={`${isMobile ? 'h-8 w-8' : 'h-6 w-6'}`} />
      {isMobile && <span>{label}</span>}
    </Link>
  );

  return (
    <nav className="sticky top-0 w-full bg-white shadow-md z-50 select-none">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex flex-col items-center">
            <h1 className="bg-yellow-300 px-2 py-1 rounded-2xl text-3xl font-extrabold font-serif">
              Tembe
            </h1>
            <span className="font-bold text-red-500">Driving School</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_ITEMS.map((item) => (
              <NavigationItem
                key={item.path}
                Icon={item.icon}
                label={item.label}
                path={item.path}
              />
            ))}
            {/* <div className="ml-4">
              <DarkMode />
            </div> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-yellow-300 z-[60] md:hidden">
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-xl z-[70] animate-slide-in">
            <div className="flex flex-col p-4">
              <div className="flex justify-end mb-4">
                <button
                  onClick={toggleMenu}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                  aria-label="Close Menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex border-red-500  flex-col gap-4">
                {NAVIGATION_ITEMS.map((item) => (
                  <NavigationItem
                    key={item.path}
                    Icon={item.icon}
                    label={item.label}
                    path={item.path}
                    isMobile={true}
                  />
                ))}
              </div>
              {/* <div className="mt-8 flex justify-center">
                <DarkMode />
              </div> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;