import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Code2, Sun, Moon, Monitor } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { FloatingGeometry } from "./home/subcomponents/FloatingGeometry";
import { NeuralNetwork } from "./home/subcomponents/NeuralNetwork";
import { useTheme } from "./ui/theme-provider"; // <-- Import your theme hook

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export function PublicHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  // Cycle through "light" → "dark" → "system"
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <>
      {/* Background Animations */}
      <FloatingGeometry />
      <NeuralNetwork />

      <header className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-md border-b border-indigo-500/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                TechSolutions
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-indigo-400"
                      : "text-gray-300 hover:text-indigo-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA & Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-indigo-600/20 hover:text-indigo-300"
                onClick={toggleTheme}
                title={`Switch Theme (Current: ${theme})`}
              >
                {theme === "light" && <Sun className="h-5 w-5" />}
                {theme === "dark" && <Moon className="h-5 w-5" />}
                {theme === "system" && <Monitor className="h-5 w-5" />}
              </Button>

              <Link to="/contact">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg border border-indigo-400/30">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-indigo-600/20 hover:text-indigo-300"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[400px] bg-gray-900 border-l border-indigo-500/30"
                >
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors ${
                          location.pathname === item.href
                            ? "text-indigo-400"
                            : "text-gray-300 hover:text-indigo-400"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}

                    {/* Theme Toggle in Mobile */}
                    <Button
                      variant="outline"
                      className="w-full text-gray-300 border-indigo-500/30 hover:bg-indigo-600/20 hover:text-indigo-300"
                      onClick={() => {
                        toggleTheme();
                        setIsOpen(false);
                      }}
                    >
                      {theme === "light" && <Sun className="h-5 w-5 mr-2" />}
                      {theme === "dark" && <Moon className="h-5 w-5 mr-2" />}
                      {theme === "system" && (
                        <Monitor className="h-5 w-5 mr-2" />
                      )}
                      Switch Theme
                    </Button>

                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white mt-4">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
