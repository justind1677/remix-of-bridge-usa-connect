import {
  Languages,
  Calendar,
  Home,
  FileText,
  Lightbulb,
  HeadphonesIcon,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Languages,
      title: t('Translation & Interpretation', 'Tradução e Interpretação', 'Traducción e Interpretación'),
      description: t(
        'We provide bilingual support for appointments, phone calls, and written documents. Whether you need help understanding a lease agreement, communicating with a school, or navigating a medical visit, we bridge the language gap.',
        'Oferecemos suporte bilíngue para consultas, ligações telefônicas e documentos escritos. Seja para entender um contrato de aluguel, comunicar-se com uma escola ou navegar em uma consulta médica, nós fazemos a ponte linguística.',
        'Brindamos apoyo bilingüe para citas, llamadas telefónicas y documentos escritos. Ya sea que necesite ayuda para entender un contrato de arrendamiento, comunicarse con una escuela o asistir a una cita médica, nosotros cerramos la brecha del idioma.'
      ),
    },
    {
      icon: Calendar,
      title: t('Appointment Scheduling', 'Agendamento de Consultas', 'Programación de Citas'),
      description: t(
        'We coordinate and schedule appointments on your behalf—medical visits, school meetings, government offices, and more. We handle the logistics so you can focus on settling in.',
        'Coordenamos e agendamos consultas em seu nome—visitas médicas, reuniões escolares, repartições públicas e muito mais. Cuidamos da logística para que você possa focar em se estabelecer.',
        'Coordinamos y programamos citas en su nombre: visitas médicas, reuniones escolares, oficinas gubernamentales y más. Nosotros manejamos la logística para que usted pueda concentrarse en establecerse.'
      ),
    },
    {
      icon: Home,
      title: t('Housing Coordination', 'Coordenação de Moradia', 'Coordinación de Vivienda'),
      description: t(
        "Finding a home in a new country can be overwhelming. We help with rental searches, understanding lease terms, coordinating move-in details, and ensuring you understand what you're signing.",
        'Encontrar uma casa em um novo país pode ser avassalador. Ajudamos com busca de aluguel, compreensão dos termos do contrato, coordenação de detalhes da mudança e garantimos que você entenda o que está assinando.',
        'Encontrar un hogar en un nuevo país puede ser abrumador. Le ayudamos con la búsqueda de arriendo, comprensión de los términos del contrato, coordinación de los detalles de la mudanza y nos aseguramos de que entienda lo que está firmando.'
      ),
    },
    {
      icon: Lightbulb,
      title: t('Utilities Setup Guidance', 'Orientação para Configuração de Serviços', 'Guía para Configuración de Servicios'),
      description: t(
        'From electricity to internet, water to waste services—we guide you through setting up essential utilities. We explain the process, help with applications, and follow up to ensure everything is connected.',
        'Da eletricidade à internet, da água ao lixo—orientamos você na configuração de serviços essenciais. Explicamos o processo, ajudamos com solicitações e acompanhamos para garantir que tudo esteja conectado.',
        'Desde la electricidad hasta el internet, del agua a los servicios de basura—le guiamos en la configuración de servicios esenciales. Explicamos el proceso, ayudamos con las solicitudes y hacemos seguimiento para asegurar que todo esté conectado.'
      ),
    },
    {
      icon: FileText,
      title: t('Document Understanding', 'Compreensão de Documentos', 'Comprensión de Documentos'),
      description: t(
        'Mail, bills, forms, notices—American paperwork can be confusing. We help you understand what documents mean, what actions are required, and what deadlines matter.',
        'Correspondências, contas, formulários, avisos—a papelada americana pode ser confusa. Ajudamos você a entender o significado dos documentos, quais ações são necessárias e quais prazos importam.',
        'Correo, facturas, formularios, avisos—el papeleo estadounidense puede ser confuso. Le ayudamos a entender qué significan los documentos, qué acciones se requieren y qué fechas límite son importantes.'
      ),
    },
    {
      icon: HeadphonesIcon,
      title: t('Ongoing Support', 'Suporte Contínuo', 'Apoyo Continuo'),
      description: t(
        "Life in a new country brings continuous questions. With our ongoing support, you have a trusted contact to turn to when unexpected situations arise—whether it's a surprise bill, a confusing letter, or simply needing guidance.",
        'A vida em um novo país traz perguntas contínuas. Com nosso suporte contínuo, você tem um contato de confiança para recorrer quando situações inesperadas surgem—seja uma conta surpresa, uma carta confusa ou simplesmente precisando de orientação.',
        'La vida en un nuevo país trae preguntas continuas. Con nuestro apoyo continuo, usted tiene un contacto de confianza al cual acudir cuando surgen situaciones inesperadas—ya sea una factura sorpresa, una carta confusa o simplemente necesitando orientación.'
      ),
    },
  ];

  const notProvided = [
    t('Legal advice or representation', 'Assessoria ou representação jurídica', 'Asesoría o representación legal'),
    t('Immigration services or visa assistance', 'Serviços de imigração ou assistência com visto', 'Servicios de inmigración o asistencia con visa'),
    t('Tax preparation or financial advice', 'Preparação de impostos ou consultoria financeira', 'Preparación de impuestos o asesoría financiera'),
    t('Licensed professional services', 'Serviços profissionais licenciados', 'Servicios profesionales licenciados'),
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              {t('Our Services', 'Nossos Serviços', 'Nuestros Servicios')}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t(
                'Comprehensive bilingual support to help you navigate life in the United States.',
                'Suporte bilíngue abrangente para ajudá-lo a navegar a vida nos Estados Unidos.',
                'Apoyo bilingüe integral para ayudarle a navegar la vida en Estados Unidos.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col gap-8 md:flex-row md:items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="aspect-video rounded-2xl bg-secondary/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Provide */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {t('Important: What We Do Not Provide', 'Importante: O Que Não Oferecemos', 'Importante: Lo Que No Ofrecemos')}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {t(
                      'To ensure clarity and protect your interests, please note that Amanda Bridge USA does not provide:',
                      'Para garantir clareza e proteger seus interesses, observe que Amanda Bridge USA não fornece:',
                      'Para garantizar claridad y proteger sus intereses, tenga en cuenta que Amanda Bridge USA no proporciona:'
                    )}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {notProvided.map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {t(
                      'When needed, we can help connect you with licensed professionals in these areas.',
                      'Quando necessário, podemos ajudá-lo a se conectar com profissionais licenciados nessas áreas.',
                      'Cuando sea necesario, podemos ayudarle a conectarse con profesionales licenciados en estas áreas.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">
            {t('Ready to Get Support?', 'Pronto para Obter Apoio?', '¿Listo para Obtener Apoyo?')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t(
              'Book a consultation and let us help you navigate your new life.',
              'Agende uma consulta e deixe-nos ajudá-lo a navegar sua nova vida.',
              'Agende una consulta y permítanos ayudarle a navegar su nueva vida.'
            )}
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/booking">
              {t('Book Now', 'Agende Agora', 'Agende Ahora')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;