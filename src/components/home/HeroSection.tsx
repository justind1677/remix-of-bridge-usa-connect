import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Premium gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(40 30% 97%) 0%, hsl(40 20% 92%) 100%)',
        }}
      />
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Brand Name */}
          <h1 className="animate-fade-in font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Amanda Bridge USA
          </h1>

          {/* Tagline */}
          <p className="animate-fade-in-delay mt-6 md:mt-8 font-display text-xl text-foreground/80 sm:text-2xl md:text-3xl">
            {t(
              'Your Bridge to Life in the U.S.',
              'Sua Ponte para a Vida nos EUA.',
              'Tu Puente hacia la Vida en EE.UU.'
            )}
          </p>

          {/* Subtitle */}
          <p className="animate-fade-in-delay mt-6 mx-auto max-w-xl text-base text-muted-foreground sm:text-lg">
            {t(
              'Bilingual guidance, coordination, and notary services — without the stress.',
              'Orientação bilíngue, coordenação e serviços notariais — sem estresse.',
              'Orientación bilingüe, coordinación y servicios notariales — sin estrés.'
            )}
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-delay mt-10 md:mt-12">
            <Button asChild size="lg" className="group text-base px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
              <Link to="/booking">
                {t('Book a Consultation', 'Agende uma Consulta', 'Reserve una Consulta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
