import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { href: '/', label: t('Home', 'Início', 'Inicio') },
    { href: '/services', label: t('Services', 'Serviços', 'Servicios') },
    { href: '/pricing', label: t('Pricing', 'Preços', 'Precios') },
    { href: '/about', label: t('About', 'Sobre', 'Acerca') },
    { href: '/contact', label: t('Contact', 'Contato', 'Contacto') },
  ];

  const languages: { code: 'en' | 'pt' | 'es'; label: string; flag: string }[] = [
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'pt', label: 'PT', flag: '🇧🇷' },
    { code: 'es', label: 'ES', flag: '🇨🇴' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-secondary backdrop-blur supports-[backdrop-filter]:bg-secondary/95">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Left aligned */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Amanda Bridge USA" 
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary ${
                  location.pathname === link.href
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="flex items-center rounded-lg border border-border bg-secondary/50 p-0.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                    language === lang.code
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <span className="mr-1">{lang.flag}</span>
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Book Now CTA */}
            <Button asChild className="hidden sm:inline-flex">
              <Link to="/booking">{t('Book Now', 'Agende Agora')}</Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'bg-secondary text-foreground'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                  {t('Book Now', 'Agende Agora')}
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
