import { Link } from 'react-router-dom';
import { Check, ArrowRight, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const PricingSection = () => {
  const { t } = useLanguage();

  const tiers = [
    {
      name: t('Basic', 'Básico', 'Básico'),
      price: '$99',
      description: t('One focused task', 'Uma tarefa específica', 'Una tarea específica'),
      bestFor: t('Best for a single question or task', 'Ideal para uma única pergunta ou tarefa', 'Ideal para una sola pregunta o tarea'),
      features: [
        t('One session (up to 60 min)', 'Uma sessão (até 60 min)', 'Una sesión (hasta 60 min)'),
        t('WhatsApp follow-up (48 hours)', 'Acompanhamento WhatsApp (48 horas)', 'Seguimiento WhatsApp (48 horas)'),
        t('Email recap + next steps', 'Resumo por e-mail + próximos passos', 'Resumen por correo + próximos pasos'),
        t('Bilingual assistance', 'Assistência bilíngue', 'Asistencia bilingüe'),
      ],
      tierColor: 'bg-emerald-500',
      popular: false,
      nudge: t('Need help with multiple steps?', 'Precisa de ajuda com várias etapas?', '¿Necesita ayuda con varios pasos?'),
      nudgeLink: true,
    },
    {
      name: t('Intermediate', 'Intermediário', 'Intermedio'),
      price: '$149',
      description: t('Multi-task coordination', 'Coordenação de várias tarefas', 'Coordinación de varias tareas'),
      bestFor: t('Best value for most families', 'Melhor custo-benefício para a maioria das famílias', 'Mejor valor para la mayoría de las familias'),
      features: [
        t('Extended session (up to 2 hours)', 'Sessão estendida (até 2 horas)', 'Sesión extendida (hasta 2 horas)'),
        t('WhatsApp coordination (7 days)', 'Coordenação WhatsApp (7 dias)', 'Coordinación WhatsApp (7 días)'),
        t('Priority responses', 'Respostas prioritárias', 'Respuestas prioritarias'),
        t('Multi-task planning & checklist', 'Planejamento multi-tarefas + checklist', 'Planificación multi-tareas + checklist'),
        t('Document tracking', 'Rastreamento de documentos', 'Seguimiento de documentos'),
      ],
      tierColor: 'bg-amber-500',
      popular: true,
      nudge: null,
      nudgeLink: false,
    },
    {
      name: t('Advanced', 'Avançado', 'Avanzado'),
      price: '$249',
      description: t('Full coordination & support', 'Coordenação e suporte completos', 'Coordinación y apoyo completos'),
      bestFor: t('Peace of mind for complex transitions', 'Tranquilidade para transições complexas', 'Tranquilidad para transiciones complejas'),
      features: [
        t('White-glove, personalized support', 'Suporte personalizado de alto nível', 'Apoyo personalizado de alto nivel'),
        t('WhatsApp priority access (14 days)', 'Acesso prioritário WhatsApp (14 dias)', 'Acceso prioritario WhatsApp (14 días)'),
        t('Ongoing coordination & follow-ups', 'Coordenação contínua e acompanhamentos', 'Coordinación continua y seguimientos'),
        t('Notary services included*', 'Serviços notariais incluídos*', 'Servicios notariales incluidos*'),
        t('Family or relocation support', 'Suporte familiar ou de mudança', 'Apoyo familiar o de mudanza'),
      ],
      tierColor: 'bg-blue-500',
      popular: false,
      nudge: null,
      nudgeLink: false,
    },
  ];

  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            {t('Simple, Transparent Pricing', 'Preços Simples e Transparentes', 'Precios Simples y Transparentes')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t(
              'All tiers include bilingual support and WhatsApp access. Choose what fits your needs.',
              'Todos os níveis incluem suporte bilíngue e acesso ao WhatsApp. Escolha o que melhor atende às suas necessidades.',
              'Todos los niveles incluyen soporte bilingüe y acceso a WhatsApp. Elija lo que mejor se adapte a sus necesidades.'
            )}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border bg-card p-8 shadow-card transition-all duration-300 hover:shadow-card-hover ${
                tier.popular ? 'border-primary ring-2 ring-primary/20 scale-[1.02]' : 'border-border'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    <Star className="h-3 w-3 fill-current" />
                    {t('Most Popular', 'Mais Popular', 'Más Popular')}
                  </span>
                </div>
              )}

              {/* Tier indicator */}
              <div className={`h-2 w-12 rounded-full ${tier.tierColor}`} />

              {/* Tier name and price */}
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                {tier.name}
              </h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-foreground">
                  {tier.price}
                </span>
                <span className="text-muted-foreground">
                  {t('/ session', '/ sessão', '/ sesión')}
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-muted-foreground">{tier.description}</p>
              <p className="mt-2 text-sm font-medium text-primary">{tier.bestFor}</p>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Nudge for Basic tier */}
              {tier.nudge && (
                <p className="mt-4 text-xs text-muted-foreground italic">
                  {tier.nudge}{' '}
                  <span className="text-primary font-medium">
                    {t('Try Intermediate →', 'Experimente o Intermediário →', 'Pruebe el Intermedio →')}
                  </span>
                </p>
              )}

              {/* CTA */}
              <Button
                asChild
                className="mt-8 w-full"
                variant={tier.popular ? 'default' : 'outline'}
                size="lg"
              >
                <Link to="/booking">
                  {tier.popular 
                    ? t('Get Started', 'Começar Agora', 'Empezar Ahora')
                    : t('Book Now', 'Agende Agora', 'Agende Ahora')
                  }
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* WhatsApp clarification */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-sm text-muted-foreground">
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            {t(
              'WhatsApp is used for coordination after booking — not unlimited free access',
              'WhatsApp é usado para coordenação após agendamento — não é acesso ilimitado gratuito',
              'WhatsApp se usa para coordinación después de agendar — no es acceso ilimitado gratuito'
            )}
          </div>
        </div>

        {/* Notary footnote */}
        <p className="mt-4 text-center text-xs text-muted-foreground">
          {t(
            '*Notary services available when applicable and within legal scope',
            '*Serviços notariais disponíveis quando aplicáveis e dentro do escopo legal',
            '*Servicios notariales disponibles cuando corresponda y dentro del alcance legal'
          )}
        </p>
      </div>
    </section>
  );
};

export default PricingSection;