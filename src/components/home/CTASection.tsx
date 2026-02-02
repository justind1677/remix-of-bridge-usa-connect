import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Shield,
      text: t('U.S.-based support', 'Suporte nos EUA', 'Apoyo en EE.UU.'),
    },
    {
      icon: Clock,
      text: t('Response within 24h', 'Resposta em até 24h', 'Respuesta en 24h'),
    },
    {
      icon: Users,
      text: t('Bilingual team', 'Equipe bilíngue', 'Equipo bilingüe'),
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center md:px-16 md:py-24">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
              {t('Take the First Step', 'Dê o Primeiro Passo', 'Da el Primer Paso')}
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              {t(
                "Book a session and let us help you navigate life in the U.S. — one step at a time.",
                'Agende uma sessão e deixe-nos ajudá-lo a navegar a vida nos EUA — um passo de cada vez.',
                'Agende una sesión y permítanos ayudarle a navegar la vida en EE.UU. — un paso a la vez.'
              )}
            </p>

            {/* Benefits */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-primary-foreground/90"
                >
                  <benefit.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto text-base"
              >
                <Link to="/pricing">
                  {t('See Pricing & Book', 'Ver Preços e Agendar', 'Ver Precios y Agendar')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-primary-foreground/60">
              {t(
                'Most families choose our Intermediate tier ($149)',
                'A maioria das famílias escolhe nosso nível Intermediário ($149)',
                'La mayoría de las familias eligen nuestro nivel Intermedio ($149)'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;