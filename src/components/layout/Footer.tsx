import { Link } from 'react-router-dom';
import { Heart, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="font-display text-lg font-bold text-primary-foreground">AB</span>
              </div>
              <span className="font-display text-xl font-semibold text-foreground">
                Amanda Bridge USA
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t(
                'Clear guidance. Calm support. Every step of the way.',
                'Orientação clara. Apoio tranquilo. Em cada passo do caminho.',
                'Orientación clara. Apoyo tranquilo. En cada paso del camino.'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-foreground">
              {t('Quick Links', 'Links Rápidos', 'Enlaces Rápidos')}
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('Services', 'Serviços', 'Servicios')}
              </Link>
              <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('Pricing', 'Preços', 'Precios')}
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('About Us', 'Sobre Nós', 'Sobre Nosotros')}
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('Contact', 'Contato', 'Contacto')}
              </Link>
              <Link to="/booking" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t('Book Now', 'Agende Agora', 'Agende Ahora')}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold text-foreground">
              {t('Get in Touch', 'Entre em Contato', 'Contáctenos')}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@amandabridgeusa.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@amandabridgeusa.com
              </a>
              <a
                href="https://wa.me/12242548014"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                WhatsApp: +1 (224) 254-8014
              </a>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
            {t(
              'Amanda Bridge USA provides coordination, translation, and concierge services only. We do not provide legal, immigration, tax, or financial advice. When needed, we can help connect clients with licensed professionals.',
              'Amanda Bridge USA oferece apenas serviços de coordenação, tradução e concierge. Não fornecemos consultoria jurídica, imigratória, fiscal ou financeira. Quando necessário, podemos ajudar a conectar clientes com profissionais licenciados.',
              'Amanda Bridge USA ofrece únicamente servicios de coordinación, traducción y concierge. No brindamos asesoría legal, migratoria, fiscal o financiera. Cuando sea necesario, podemos ayudar a conectar clientes con profesionales licenciados.'
            )}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Amanda Bridge USA. {t('All rights reserved.', 'Todos os direitos reservados.', 'Todos los derechos reservados.')}
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            {t('Made with', 'Feito com', 'Hecho con')} <Heart className="h-3 w-3 fill-accent text-accent" /> {t('in South Florida', 'no Sul da Flórida', 'en el Sur de Florida')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;