import { Link } from 'react-router-dom';
import { Check, ArrowRight, HelpCircle, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Pricing = () => {
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
      examples: [
        t('Understanding a specific document', 'Entender um documento específico', 'Entender un documento específico'),
        t('Scheduling a single appointment', 'Agendar uma consulta única', 'Programar una cita única'),
        t('Quick translation needs', 'Necessidades rápidas de tradução', 'Necesidades rápidas de traducción'),
      ],
      tierColor: 'bg-emerald-500',
      popular: false,
      tierId: 'basic',
      nudge: t('Need help with multiple steps? Consider Intermediate →', 'Precisa de ajuda com várias etapas? Considere o Intermediário →', '¿Necesita ayuda con varios pasos? Considere el Intermedio →'),
    },
    {
      name: t('Intermediate', 'Intermediário', 'Intermedio'),
      price: '$149',
      description: t('Multi-task coordination', 'Coordenação de várias tarefas', 'Coordinación de varias tareas'),
      bestFor: t('Best value — recommended for most families', 'Melhor custo-benefício — recomendado para a maioria das famílias', 'Mejor valor — recomendado para la mayoría de las familias'),
      features: [
        t('Extended session (up to 2 hours)', 'Sessão estendida (até 2 horas)', 'Sesión extendida (hasta 2 horas)'),
        t('WhatsApp coordination (7 days)', 'Coordenação WhatsApp (7 dias)', 'Coordinación WhatsApp (7 días)'),
        t('Priority responses', 'Respostas prioritárias', 'Respuestas prioritarias'),
        t('Multi-task planning & checklist', 'Planejamento multi-tarefas + checklist', 'Planificación multi-tareas + checklist'),
        t('Document tracking', 'Rastreamento de documentos', 'Seguimiento de documentos'),
        t('Bilingual assistance', 'Assistência bilíngue', 'Asistencia bilingüe'),
      ],
      examples: [
        t('Setting up multiple utilities', 'Configurar múltiplos serviços', 'Configurar múltiples servicios'),
        t('Housing search assistance', 'Assistência na busca de moradia', 'Asistencia en búsqueda de vivienda'),
        t('Multiple appointment coordination', 'Coordenação de múltiplas consultas', 'Coordinación de múltiples citas'),
      ],
      tierColor: 'bg-amber-500',
      popular: true,
      tierId: 'intermediate',
      nudge: null,
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
        t('Bilingual assistance', 'Assistência bilíngue', 'Asistencia bilingüe'),
      ],
      examples: [
        t('Complete relocation coordination', 'Coordenação completa de mudança', 'Coordinación completa de mudanza'),
        t('Complex document handling', 'Manuseio de documentos complexos', 'Manejo de documentos complejos'),
        t('Ongoing family support', 'Suporte contínuo para a família', 'Apoyo continuo para la familia'),
      ],
      tierColor: 'bg-blue-500',
      popular: false,
      tierId: 'advanced',
      nudge: null,
    },
  ];

  const faqs = [
    {
      question: t('What payment methods do you accept?', 'Quais métodos de pagamento vocês aceitam?', '¿Qué métodos de pago aceptan?'),
      answer: t(
        'We accept all major credit cards, debit cards, and electronic payments. Payment is due at the time of booking.',
        'Aceitamos todos os principais cartões de crédito, débito e pagamentos eletrônicos. O pagamento é devido no momento da reserva.',
        'Aceptamos todas las principales tarjetas de crédito, débito y pagos electrónicos. El pago se realiza al momento de la reserva.'
      ),
    },
    {
      question: t('How does WhatsApp access work?', 'Como funciona o acesso ao WhatsApp?', '¿Cómo funciona el acceso a WhatsApp?'),
      answer: t(
        'WhatsApp is used for coordination after booking — not unlimited free access. Each tier includes a specific window of WhatsApp support (48 hours, 7 days, or 14 days) for questions and follow-ups related to your session.',
        'O WhatsApp é usado para coordenação após o agendamento — não é acesso ilimitado gratuito. Cada nível inclui uma janela específica de suporte via WhatsApp (48 horas, 7 dias ou 14 dias) para perguntas e acompanhamentos relacionados à sua sessão.',
        'WhatsApp se usa para coordinación después de agendar — no es acceso ilimitado gratuito. Cada nivel incluye una ventana específica de soporte WhatsApp (48 horas, 7 días o 14 días) para preguntas y seguimientos relacionados con su sesión.'
      ),
    },
    {
      question: t('Can I upgrade my tier mid-session?', 'Posso fazer upgrade do meu nível durante a sessão?', '¿Puedo mejorar mi nivel durante la sesión?'),
      answer: t(
        "Yes! If your needs expand beyond the original tier, we can discuss upgrading to a higher tier. You'll only pay the difference.",
        'Sim! Se suas necessidades se expandirem além do nível original, podemos discutir o upgrade para um nível superior. Você pagará apenas a diferença.',
        '¡Sí! Si sus necesidades se expanden más allá del nivel original, podemos discutir la mejora a un nivel superior. Solo pagará la diferencia.'
      ),
    },
    {
      question: t('What if I need more time than included?', 'E se eu precisar de mais tempo do que o incluído?', '¿Qué pasa si necesito más tiempo del incluido?'),
      answer: t(
        'Additional time can be added at an hourly rate. We\'ll always discuss this with you before proceeding.',
        'Tempo adicional pode ser adicionado por uma taxa horária. Sempre discutiremos isso com você antes de prosseguir.',
        'Se puede agregar tiempo adicional a una tarifa por hora. Siempre lo discutiremos con usted antes de proceder.'
      ),
    },
    {
      question: t('Do you offer refunds?', 'Vocês oferecem reembolso?', '¿Ofrecen reembolsos?'),
      answer: t(
        'We offer full refunds for cancellations made at least 24 hours before the scheduled session. Please see our cancellation policy for details.',
        'Oferecemos reembolso total para cancelamentos feitos com pelo menos 24 horas de antecedência da sessão agendada. Consulte nossa política de cancelamento para detalhes.',
        'Ofrecemos reembolsos completos para cancelaciones realizadas con al menos 24 horas de anticipación a la sesión programada. Consulte nuestra política de cancelación para más detalles.'
      ),
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              {t('Simple, Transparent Pricing', 'Preços Simples e Transparentes', 'Precios Simples y Transparentes')}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t(
                'All tiers include bilingual support and WhatsApp access. Choose what fits your needs.',
                'Todos os níveis incluem suporte bilíngue e acesso ao WhatsApp. Escolha o que melhor atende às suas necessidades.',
                'Todos los niveles incluyen soporte bilingüe y acceso a WhatsApp. Elija lo que mejor se adapte a sus necesidades.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border bg-card p-8 shadow-card transition-all duration-300 hover:shadow-card-hover ${
                  tier.popular ? 'border-primary ring-2 ring-primary/20 lg:scale-[1.02]' : 'border-border'
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

                {/* Header */}
                <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground">{t('/ session', '/ sessão', '/ sesión')}</span>
                </div>

                {/* Description */}
                <p className="mt-4 text-muted-foreground">{tier.description}</p>
                <p className="mt-2 text-sm font-medium text-primary">{tier.bestFor}</p>

                {/* Features */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground">
                    {t('What\'s Included:', 'O Que Está Incluído:', 'Qué Está Incluido:')}
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Examples */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-foreground">
                    {t('Example Uses:', 'Exemplos de Uso:', 'Ejemplos de Uso:')}
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {tier.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nudge */}
                {tier.nudge && (
                  <p className="mt-4 text-xs text-muted-foreground italic">{tier.nudge}</p>
                )}

                {/* CTA */}
                <Button
                  asChild
                  className="mt-8 w-full"
                  variant={tier.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  <Link to={`/booking?tier=${tier.tierId}`}>
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

      {/* FAQ */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <HelpCircle className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground">
                {t('Frequently Asked Questions', 'Perguntas Frequentes', 'Preguntas Frecuentes')}
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-xl border border-border bg-card px-6"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">
            {t('Not Sure Which Tier Is Right?', 'Não Tem Certeza de Qual Nível É o Certo?', '¿No Está Seguro de Cuál Nivel Es el Adecuado?')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t(
              "Most families choose Intermediate. Contact us if you'd like personalized guidance.",
              'A maioria das famílias escolhe o Intermediário. Entre em contato se quiser orientação personalizada.',
              'La mayoría de las familias eligen el Intermedio. Contáctenos si desea orientación personalizada.'
            )}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/booking?tier=intermediate">
                {t('Book Intermediate', 'Agendar Intermediário', 'Agendar Intermedio')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                {t('Contact Us', 'Fale Conosco', 'Contáctenos')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;