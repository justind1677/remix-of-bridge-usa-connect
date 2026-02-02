import { Link } from 'react-router-dom';
import { Heart, Users, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: t('Compassion', 'Compaixão', 'Compasión'),
      description: t(
        'We understand the challenges of moving to a new country. Every interaction is guided by empathy and care.',
        'Entendemos os desafios de se mudar para um novo país. Toda interação é guiada por empatia e cuidado.',
        'Entendemos los desafíos de mudarse a un nuevo país. Cada interacción está guiada por empatía y cuidado.'
      ),
    },
    {
      icon: Shield,
      title: t('Trust', 'Confiança', 'Confianza'),
      description: t(
        'Your peace of mind matters. We provide honest, clear guidance you can rely on.',
        'Sua tranquilidade importa. Fornecemos orientação honesta e clara em que você pode confiar.',
        'Su tranquilidad importa. Brindamos orientación honesta y clara en la que puede confiar.'
      ),
    },
    {
      icon: Users,
      title: t('Community', 'Comunidade', 'Comunidad'),
      description: t(
        'We celebrate the Brazilian community and are dedicated to supporting families building new lives.',
        'Celebramos a comunidade brasileira e somos dedicados a apoiar famílias construindo novas vidas.',
        'Celebramos la comunidad latina y estamos dedicados a apoyar familias construyendo nuevas vidas.'
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
              {t('About Amanda Bridge USA', 'Sobre Amanda Bridge USA', 'Acerca de Amanda Bridge USA')}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t(
                'Building bridges between cultures, one family at a time.',
                'Construindo pontes entre culturas, uma família de cada vez.',
                'Construyendo puentes entre culturas, una familia a la vez.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <div className="aspect-square rounded-2xl bg-secondary/50" />
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground">
                  {t('Our Story', 'Nossa História', 'Nuestra Historia')}
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    {t(
                      'Amanda Bridge USA was founded with a simple yet powerful mission: to make the transition to life in the United States less overwhelming for Brazilian immigrants and their families.',
                      'Amanda Bridge USA foi fundada com uma missão simples, mas poderosa: tornar a transição para a vida nos Estados Unidos menos avassaladora para imigrantes brasileiros e suas famílias.',
                      'Amanda Bridge USA fue fundada con una misión simple pero poderosa: hacer que la transición a la vida en Estados Unidos sea menos abrumadora para los inmigrantes latinos y sus familias.'
                    )}
                  </p>
                  <p>
                    {t(
                      'We understand firsthand the challenges of navigating a new country—the language barriers, the unfamiliar systems, the countless small decisions that add up to big stress. That\'s why we\'re here: to provide calm, bilingual support every step of the way.',
                      'Entendemos em primeira mão os desafios de navegar em um novo país—as barreiras linguísticas, os sistemas desconhecidos, as inúmeras pequenas decisões que se somam em grande estresse. É por isso que estamos aqui: para fornecer apoio tranquilo e bilíngue em cada passo do caminho.',
                      'Entendemos de primera mano los desafíos de navegar en un nuevo país—las barreras del idioma, los sistemas desconocidos, las innumerables pequeñas decisiones que se suman a un gran estrés. Por eso estamos aquí: para brindar apoyo tranquilo y bilingüe en cada paso del camino.'
                    )}
                  </p>
                  <p>
                    {t(
                      'Based in South Florida, we serve Brazilian families throughout the region, helping them settle in, understand their new environment, and build confidence in their new home.',
                      'Baseados no Sul da Flórida, atendemos famílias brasileiras em toda a região, ajudando-as a se estabelecer, entender seu novo ambiente e construir confiança em seu novo lar.',
                      'Con sede en el Sur de Florida, atendemos a familias latinas en toda la región, ayudándolas a establecerse, entender su nuevo entorno y construir confianza en su nuevo hogar.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              {t('Our Mission', 'Nossa Missão', 'Nuestra Misión')}
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-primary-foreground/90">
              {t(
                'To reduce the stress and uncertainty of immigration by providing compassionate, bilingual coordination and support services that empower Brazilian families to thrive in the United States.',
                'Reduzir o estresse e a incerteza da imigração fornecendo serviços de coordenação e suporte compassivos e bilíngues que capacitam famílias brasileiras a prosperar nos Estados Unidos.',
                'Reducir el estrés y la incertidumbre de la inmigración brindando servicios de coordinación y apoyo compasivos y bilingües que empoderan a las familias latinas para prosperar en Estados Unidos.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              {t('Our Values', 'Nossos Valores', 'Nuestros Valores')}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t(
                'The principles that guide everything we do.',
                'Os princípios que guiam tudo o que fazemos.',
                'Los principios que guían todo lo que hacemos.'
              )}
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-8 text-center shadow-card"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">
            {t('Ready to Begin Your Journey?', 'Pronto para Começar Sua Jornada?', '¿Listo para Comenzar Su Viaje?')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t(
              "We're here to help you every step of the way.",
              'Estamos aqui para ajudá-lo em cada passo do caminho.',
              'Estamos aquí para ayudarle en cada paso del camino.'
            )}
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/booking">
              {t('Book a Consultation', 'Agende uma Consulta', 'Agende una Consulta')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;