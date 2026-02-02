import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, MessageCircle, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

// Map tier names to SimplyBook service IDs
const tierServiceIds: Record<string, number> = {
  basic: 1,
  intermediate: 2,
  advanced: 3,
};

const Booking = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const tierParam = searchParams.get('tier');
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const widgetInitialized = useRef(false);
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [showWidget, setShowWidget] = useState(false);

  const tiers = [
    {
      name: t('Basic', 'Básico', 'Básico'),
      price: '$99',
      description: t('Quick, single-task help', 'Ajuda rápida para uma única tarefa', 'Ayuda rápida para una sola tarea'),
      bestFor: t('Best for: Quick questions or one-time needs', 'Ideal para: Perguntas rápidas ou necessidades pontuais', 'Ideal para: Preguntas rápidas o necesidades puntuales'),
      features: [
        t('One focused session (up to 1 hour)', 'Uma sessão focada (até 1 hora)', 'Una sesión enfocada (hasta 1 hora)'),
        t('Brief follow-up support', 'Breve suporte de acompanhamento', 'Breve apoyo de seguimiento'),
        t('Email communication', 'Comunicação por e-mail', 'Comunicación por correo'),
      ],
      tierColor: 'bg-tier-basic',
      popular: false,
      tierId: 'basic',
    },
    {
      name: t('Intermediate', 'Intermediário', 'Intermedio'),
      price: '$149',
      description: t('Multi-task support', 'Suporte para múltiplas tarefas', 'Apoyo para múltiples tareas'),
      bestFor: t('Best for: Multiple tasks or ongoing guidance', 'Ideal para: Múltiplas tarefas ou orientação contínua', 'Ideal para: Múltiples tareas u orientación continua'),
      features: [
        t('Extended session (up to 2 hours)', 'Sessão estendida (até 2 horas)', 'Sesión extendida (hasta 2 horas)'),
        t('Comprehensive guidance', 'Orientação abrangente', 'Orientación integral'),
        t('Follow-up support included', 'Suporte de acompanhamento incluído', 'Apoyo de seguimiento incluido'),
        t('Priority email response', 'Resposta prioritária por e-mail', 'Respuesta prioritaria por correo'),
      ],
      tierColor: 'bg-tier-intermediate',
      popular: true,
      tierId: 'intermediate',
    },
    {
      name: t('Advanced', 'Avançado', 'Avanzado'),
      price: '$249',
      description: t('Complex or ongoing needs', 'Necessidades complexas ou contínuas', 'Necesidades complejas o continuas'),
      bestFor: t('Best for: Complex transitions or full coordination', 'Ideal para: Transições complexas ou coordenação completa', 'Ideal para: Transiciones complejas o coordinación completa'),
      features: [
        t('High-touch, personalized support', 'Suporte personalizado de alto nível', 'Apoyo personalizado de alto nivel'),
        t('Full coordination assistance', 'Assistência completa de coordenação', 'Asistencia completa de coordinación'),
        t('Priority communication', 'Comunicação prioritária', 'Comunicación prioritaria'),
        t('Extended follow-up period', 'Período estendido de acompanhamento', 'Período extendido de seguimiento'),
        t('WhatsApp access', 'Acesso via WhatsApp', 'Acceso vía WhatsApp'),
      ],
      tierColor: 'bg-tier-advanced',
      tierId: 'advanced',
      popular: false,
    },
  ];

  const initializeWidget = (client: typeof clientInfo, serviceId?: number) => {
    if (widgetInitialized.current) return;

    const script = document.createElement('script');
    script.src = '//widget.simplybook.me/v2/widget/widget.js';
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      if (widgetContainerRef.current && (window as any).SimplybookWidget) {
        const predefinedConfig: any = {
          client: {
            name: client.name,
            email: client.email,
            phone: client.phone,
          },
        };
        
        // Pre-select service if tier was specified
        if (serviceId) {
          predefinedConfig.service = serviceId;
        }

        new (window as any).SimplybookWidget({
          widget_type: 'iframe',
          url: 'https://amandabridgeusa.simplybook.me',
          theme: 'default',
          theme_settings: {
            timeline_hide_unavailable: '1',
            hide_past_days: '0',
            timeline_show_end_time: '0',
            timeline_modern_display: 'as_slots',
            sb_base_color: '#1f3f68',
            display_item_mode: 'block',
            booking_nav_bg_color: '#1f3f68',
            body_bg_color: '#f2f2f2',
            sb_review_image: '',
            dark_font_color: '#192331',
            light_font_color: '#f5fcff',
            btn_color_1: '#e45f59',
            sb_company_label_color: '#ffffff',
            hide_img_mode: '1',
            show_sidebar: '1',
            sb_busy: '#c7b3b3',
            sb_available: '#d6ebff',
          },
          timeline: 'modern',
          datepicker: 'top_calendar',
          is_rtl: false,
          app_config: {
            clear_session: 0,
            allow_switch_to_ada: 0,
            predefined: predefinedConfig,
          },
        });
        widgetInitialized.current = true;
      }
    };

    document.head.appendChild(script);
  };

  useEffect(() => {
    return () => {
      const existingScript = document.querySelector('script[src*="simplybook.me"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent, selectedTier?: string) => {
    e.preventDefault();
    setShowWidget(true);
    const serviceId = selectedTier ? tierServiceIds[selectedTier] : (tierParam ? tierServiceIds[tierParam] : undefined);
    setTimeout(() => {
      initializeWidget(clientInfo, serviceId);
    }, 100);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              {t('Book a Session', 'Agende uma Sessão', 'Agende una Sesión')}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t(
                'Choose a service, pick a time, and you will receive a confirmation email.',
                'Escolha um serviço, selecione um horário e você receberá um e-mail de confirmação.',
                'Elija un servicio, seleccione un horario y recibirá un correo de confirmación.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-[980px]">
            {!showWidget ? (
              <>
                {/* Client Info Form */}
                <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 shadow-card mb-12">
                  <h2 className="font-display text-xl font-bold text-foreground text-center mb-2">
                    {t('Your Information', 'Suas Informações', 'Su Información')}
                  </h2>
                  <p className="text-sm text-muted-foreground text-center mb-6">
                    {t(
                      'Please enter your details to proceed with booking.',
                      'Por favor, insira seus dados para prosseguir com o agendamento.',
                      'Por favor, ingrese sus datos para proceder con la reserva.'
                    )}
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('Name', 'Nome', 'Nombre')}</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={t('Your full name', 'Seu nome completo', 'Su nombre completo')}
                        value={clientInfo.name}
                        onChange={(e) =>
                          setClientInfo({ ...clientInfo, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('Email', 'E-mail', 'Correo')}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t('your@email.com', 'seu@email.com', 'su@correo.com')}
                        value={clientInfo.email}
                        onChange={(e) =>
                          setClientInfo({ ...clientInfo, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('Phone', 'Telefone', 'Teléfono')}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t('+1 (555) 123-4567', '+1 (555) 123-4567', '+1 (555) 123-4567')}
                        value={clientInfo.phone}
                        onChange={(e) =>
                          setClientInfo({ ...clientInfo, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      {t('Continue to Booking', 'Continuar para Agendamento', 'Continuar con la Reserva')}
                    </Button>
                  </form>
                </div>

                {/* Payment Tiers */}
                <div className="mt-8">
                  <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">
                    {t('Service Tiers', 'Níveis de Serviço', 'Niveles de Servicio')}
                  </h2>
                  <div className="grid gap-8 md:grid-cols-3">
                    {tiers.map((tier, index) => (
                      <div
                        key={index}
                        className={`relative rounded-2xl border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover ${
                          tier.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                        }`}
                      >
                        {tier.popular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                              {t('Most Popular', 'Mais Popular', 'Más Popular')}
                            </span>
                          </div>
                        )}

                        {/* Tier indicator */}
                        <div className={`h-2 w-12 rounded-full ${tier.tierColor}`} />

                        {/* Tier name and price */}
                        <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                          {tier.name}
                        </h3>
                        <div className="mt-2 flex items-baseline gap-1">
                          <span className="font-display text-3xl font-bold text-foreground">
                            {tier.price}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {t('/ session', '/ sessão', '/ sesión')}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="mt-3 text-sm text-muted-foreground">{tier.description}</p>
                        <p className="mt-1 text-xs font-medium text-primary">{tier.bestFor}</p>

                        {/* Features */}
                        <ul className="mt-4 space-y-2">
                          {tier.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <Button
                          onClick={(e) => handleSubmit(e, tier.tierId)}
                          className="mt-6 w-full"
                          variant={tier.popular ? 'default' : 'outline'}
                        >
                          {t('Book Now', 'Agende Agora', 'Agende Ahora')}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div 
                ref={widgetContainerRef}
                className="simplybook-widget-container overflow-hidden rounded-2xl border border-border bg-card shadow-card"
              />
            )}
          </div>
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground">
            {t('Prefer to Talk First?', 'Prefere Conversar Primeiro?', '¿Prefiere Hablar Primero?')}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t(
              "No problem! Reach out via WhatsApp or email and we'll help you choose the right service.",
              'Sem problemas! Entre em contato via WhatsApp ou e-mail e ajudaremos você a escolher o serviço certo.',
              '¡Sin problema! Contáctenos vía WhatsApp o correo y le ayudaremos a elegir el servicio adecuado.'
            )}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="outline">
              <a
                href="https://wa.me/12242548014"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">{t('Contact Us', 'Fale Conosco', 'Contáctenos')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;