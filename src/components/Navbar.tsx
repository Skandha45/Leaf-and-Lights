import { useState } from "react";
import { ChevronDown, Search, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const teaTypes = [
    "Ceremonial Grade Matcha",
    "Culinary Grade Matcha", 
    "Sencha",
    "Gyokuro",
    "Hojicha",
    "Genmaicha"
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Company Name */}
          <div className="flex items-center">
            <h1 className="text-xl font-playfair font-semibold text-primary">
              Leaf and Lights
            </h1>
          </div>

          {/* Center - Navigation */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 justify-center ml-6 mr-4">
            <a href="#" className="nav-link">Home</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center space-x-1 hover:text-primary">
                <span>Our Japanese Teas</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border border-border shadow-medium rounded-lg p-1">
                {teaTypes.map((tea) => (
                  <DropdownMenuItem 
                    key={tea} 
                    className="hover:bg-accent hover:text-accent-foreground cursor-pointer px-3 py-2 rounded-md"
                  >
                    {tea}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="#" className="nav-link">Shop now</a>
            <a href="#" className="nav-link">Recipes</a>
            <a href="#" className="nav-link">Blogs</a>
            <a href="#" className="nav-link">Wholesale</a>
            
            <a href="#" className="nav-highlight">
              Find your Light
            </a>
          </div>

          {/* Right side - User Icons */}
          <div className="flex items-center space-x-2">
            <button className="p-1.5 hover:bg-accent rounded-full transition-colors">
              <User className="w-4 h-4 text-foreground/70 hover:text-primary" />
            </button>
            <button className="p-1.5 hover:bg-accent rounded-full transition-colors">
              <Search className="w-4 h-4 text-foreground/70 hover:text-primary" />
            </button>
            <button className="p-1.5 hover:bg-accent rounded-full transition-colors">
              <ShoppingCart className="w-4 h-4 text-foreground/70 hover:text-primary" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#" className="nav-link">Home</a>
              <a href="#" className="nav-link">Our Japanese Teas</a>
              <a href="#" className="nav-link">Shop now</a>
              <a href="#" className="nav-link">Recipes</a>
              <a href="#" className="nav-link">Blogs</a>
              <a href="#" className="nav-link">Wholesale</a>
              <a href="#" className="nav-highlight text-center">Find your Light</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;