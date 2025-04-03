
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fitflex-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="font-serif text-3xl font-bold">FITFLEX</Link>
            <p className="mt-4 text-gray-300">
              Votre salle de sport spécialisée en Pilates, renforcement musculaire et coaching privé.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" className="hover:text-fitflex-tan transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://instagram.com" className="hover:text-fitflex-tan transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-fitflex-tan transition-colors">Accueil</Link></li>
              <li><Link to="/a-propos" className="hover:text-fitflex-tan transition-colors">À PROPOS</Link></li>
              <li><Link to="/services" className="hover:text-fitflex-tan transition-colors">Services</Link></li>
              <li><Link to="/planning" className="hover:text-fitflex-tan transition-colors">Planning</Link></li>
              <li><Link to="/blog" className="hover:text-fitflex-tan transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-fitflex-tan transition-colors">Pilates</Link></li>
              <li><Link to="/services" className="hover:text-fitflex-tan transition-colors">Renforcement Musculaire</Link></li>
              <li><Link to="/services" className="hover:text-fitflex-tan transition-colors">Coaching Privé</Link></li>
              <li><Link to="/activite" className="hover:text-fitflex-tan transition-colors">Activités</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-fitflex-tan flex-shrink-0" />
                <p>123 Rue du Fitness, 75000 Paris, France</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-fitflex-tan flex-shrink-0" />
                <p>+33 1 23 45 67 89</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-fitflex-tan flex-shrink-0" />
                <p>contact@fitflex.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FITFLEX. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
