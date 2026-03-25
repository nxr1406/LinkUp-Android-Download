import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl">
                L
              </div>
              <span className="text-xl font-bold tracking-tight">LinkUp</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
              Chat Privately. Messages disappear in 24 hours.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link to="/privacy-policy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/community-guidelines" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Community Guidelines
            </Link>
            <a href="mailto:support@linkup.app" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Bangladesh
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} LinkUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
