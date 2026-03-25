import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, AlertCircle } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[80vh] bg-background flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md w-full bg-card p-10 rounded-3xl border border-border shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10">
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-muted-foreground" />
          </div>
          
          <h1 className="text-6xl font-black text-foreground mb-4 tracking-tighter">404</h1>
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-primary/25 w-full"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
