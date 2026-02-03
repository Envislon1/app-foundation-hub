import { Link } from "react-router-dom";
import { Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">GB</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">Girls Bloom & Growth</h3>
                <p className="text-sm opacity-80">Initiative for Development</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering girls and women through education, skills development, and community support.
            </p>
            <p className="text-xs opacity-60">
              CAC Registration: 7103923
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Home
              </Link>
              <Link to="/#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link to="/privacy-policy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Terms & Conditions
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:+2348180286858" 
                className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                +234 818 028 6858
              </a>
              <div className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  Chief Udoeden Palace Opp. Etim Ekpo Sport Stadium,<br />
                  Utu Etim Ekpo L.G.A, Akwa Ibom State, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © {currentYear} Girls Bloom & Growth Initiative for Development. All rights reserved.
            </p>
            <p className="text-sm opacity-60 flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-secondary" /> in Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
