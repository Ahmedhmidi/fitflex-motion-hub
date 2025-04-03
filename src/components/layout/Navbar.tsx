
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'À PROPOS', path: '/a-propos' },
  { name: 'Services', path: '/services' },
  { name: 'Activité', path: '/activite' },
  { name: 'Planning', path: '/planning' },
  { name: 'Vidéo', path: '/video' },
  { name: 'Blog', path: '/blog' },
  { name: 'Nous contacter', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePathChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePathChange);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-serif text-2xl font-bold text-fitflex-brown">
            FITFLEX
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'nav-link',
                  currentPath === link.path && 'active'
                )}
                onClick={() => setCurrentPath(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-fitflex-brown" />
            ) : (
              <Menu className="h-6 w-6 text-fitflex-brown" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out pt-20',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-6 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-xl font-medium text-fitflex-brown hover:text-fitflex-tan transition-colors"
              onClick={() => {
                setIsOpen(false);
                setCurrentPath(link.path);
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
