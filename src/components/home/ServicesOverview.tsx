import { Link } from 'react-router-dom';
import {
  Languages,
  Calendar,
  Home,
  FileText,
  Car,
  Building2,
  GraduationCap,
  Stethoscope,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesOverview = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: FileText,
      title: t('Documents & Forms', 'Documentos e Formulários', 'Documentos y Formularios'),
      description: t(
        'Translation, explanation, and assistance with applications and paperwork.',
        'Tradução, explicação e assistência com aplicações e documentos.',
        'Traducción, explicación y asistencia con aplicaciones y documentos.'
      ),
    },
    {
      icon: Calendar,
      title: t('Appointment Coordination', 'Coordenação de Consultas', 'Coordinación de Citas'),
      description: t(
        'Scheduling and coordinating medical, school, and service appointments.',
        'Agendamento e coordenação de consultas médicas, escolares e de serviços.',
        'Programación y coordinación de citas médicas, escolares y de servicios.'
      ),
    },
    {
      icon: Home,
      title: t('Housing & Utilities', 'Moradia e Serviços', 'Vivienda y Servicios'),
      description: t(
        'Guidance on rentals, leases, electricity, internet, and move-in logistics.',
        'Orientação sobre aluguéis, contratos, eletricidade, internet e logística de mudança.',
        'Orientación sobre arriendos, contratos, electricidad, internet y logística de mudanza.'
      ),
    },
    {
      icon: GraduationCap,
      title: t('School & Childcare', 'Escola e Creche', 'Escuela y Guardería'),
      description: t(
        'Navigate enrollment, registration, and school system requirements.',
        'Navegue pela matrícula, registro e requisitos do sistema escolar.',
        'Navegue por la inscripción, registro y requisitos del sistema escolar.'
      ),
    },
    {
      icon: Stethoscope,
      title: t('Healthcare Navigation', 'Navegação de Saúde', 'Navegación de Salud'),
      description: t(
        'Help understanding insurance, finding providers, and scheduling care.',
        'Ajuda para entender seguros, encontrar médicos e agendar atendimento.',
        'Ayuda para entender seguros, encontrar médicos y agendar atención.'
      ),
    },
    {
      icon: Car,
      title: t('Vehicle Guidance', 'Orientação Veicular', 'Orientación Vehicular'),
      description: t(
        'Support with buying, leasing, registration, and DMV processes.',
        'Suporte com compra, leasing, registro e processos do DMV.',
        'Apoyo con compra, leasing, registro y procesos del DMV.'
      ),
    },
    {
      icon: Building2,
      title: t('Business Setup', 'Abertura de Empresa', 'Apertura de Empresa'),
      description: t(
        'LLC formation steps, EIN process guidance — no financial advice.',
        'Passos para formar LLC, orientação sobre EIN — sem aconselhamento financeiro.',
        'Pasos para formar LLC, orientación sobre EIN — sin asesoría financiera.'
      ),
    },
    {
      icon: Languages,
      title: t('U.S. Point of Contact', 'Ponto de Contato nos EUA', 'Punto de Contacto en EE.UU.'),
      description: t(
        'We can act as your U.S.-based contact for calls and correspondence.',
        'Podemos atuar como seu contato nos EUA para ligações e correspondência.',
        'Podemos actuar como su contacto en EE.UU. para llamadas y correspondencia.'
      ),
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            {t('What We Help With', 'Como Podemos Ajudar', 'Cómo Podemos Ayudar')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t(
              'Practical support for the real challenges of settling into life in the U.S.',
              'Apoio prático para os desafios reais de se estabelecer nos EUA.',
              'Apoyo práctico para los desafíos reales de establecerse en EE.UU.'
            )}
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* What we DON'T do - Trust signal */}
        <div className="mt-16 mx-auto max-w-2xl text-center">
          <div className="rounded-2xl bg-muted/50 border border-border p-6">
            <p className="text-sm font-medium text-foreground">
              {t('What we don\'t do:', 'O que não fazemos:', 'Lo que no hacemos:')}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {t(
                'We do not provide legal, immigration, tax, or financial advice. Our role is coordination and guidance — not professional counsel.',
                'Não fornecemos aconselhamento jurídico, imigratório, fiscal ou financeiro. Nosso papel é coordenação e orientação — não consultoria profissional.',
                'No brindamos asesoría legal, migratoria, fiscal o financiera. Nuestro rol es coordinación y orientación — no asesoría profesional.'
              )}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="group">
            <Link to="/pricing">
              {t('See Pricing', 'Ver Preços', 'Ver Precios')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;