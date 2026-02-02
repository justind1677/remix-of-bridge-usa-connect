import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: t('Message Sent!', 'Mensagem Enviada!', '¡Mensaje Enviado!'),
      description: t(
        "We'll get back to you within 24-48 hours.",
        'Responderemos dentro de 24-48 horas.',
        'Le responderemos dentro de 24-48 horas.'
      ),
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: t('Email', 'E-mail', 'Correo'),
      value: 'contact@amandabridgeusa.com',
      href: 'mailto:contact@amandabridgeusa.com',
      description: t('We respond within 24-48 hours', 'Respondemos em 24-48 horas', 'Respondemos en 24-48 horas'),
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+1 (224) 254-8014',
      href: 'https://wa.me/12242548014',
      description: t('Quick responses during business hours', 'Respostas rápidas durante o horário comercial', 'Respuestas rápidas durante horario laboral'),
    },
    {
      icon: Clock,
      title: t('Business Hours', 'Horário Comercial', 'Horario de Atención'),
      value: t('Mon-Fri, 9am-6pm EST', 'Seg-Sex, 9h-18h EST', 'Lun-Vie, 9am-6pm EST'),
      href: null,
      description: t('South Florida time zone', 'Fuso horário do Sul da Flórida', 'Zona horaria del Sur de Florida'),
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              {t('Get in Touch', 'Entre em Contato', 'Contáctenos')}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t(
                "Have questions? We're here to help. Reach out and we'll respond as soon as we can.",
                'Tem perguntas? Estamos aqui para ajudar. Entre em contato e responderemos assim que possível.',
                '¿Tiene preguntas? Estamos aquí para ayudar. Contáctenos y le responderemos lo antes posible.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {t('Send Us a Message', 'Envie-nos uma Mensagem', 'Envíenos un Mensaje')}
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {t(
                    'Fill out the form below and we\'ll get back to you shortly.',
                    'Preencha o formulário abaixo e entraremos em contato em breve.',
                    'Complete el formulario a continuación y nos pondremos en contacto pronto.'
                  )}
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('Name', 'Nome', 'Nombre')}</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t('Your name', 'Seu nome', 'Su nombre')}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
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
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('Message', 'Mensagem', 'Mensaje')}</Label>
                    <Textarea
                      id="message"
                      placeholder={t(
                        'How can we help you?',
                        'Como podemos ajudá-lo?',
                        '¿Cómo podemos ayudarle?'
                      )}
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      t('Sending...', 'Enviando...', 'Enviando...')
                    ) : (
                      <>
                        {t('Send Message', 'Enviar Mensagem', 'Enviar Mensaje')}
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {t('Other Ways to Reach Us', 'Outras Formas de Contato', 'Otras Formas de Contactarnos')}
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {t(
                      'Choose the method that works best for you.',
                      'Escolha o método que funciona melhor para você.',
                      'Elija el método que mejor le funcione.'
                    )}
                  </p>
                </div>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-border bg-card p-6 shadow-card"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <method.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {method.title}
                          </h3>
                          {method.href ? (
                            <a
                              href={method.href}
                              target={method.href.startsWith('http') ? '_blank' : undefined}
                              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="mt-1 block text-primary hover:underline"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <p className="mt-1 text-foreground">{method.value}</p>
                          )}
                          <p className="mt-1 text-sm text-muted-foreground">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Book CTA */}
                <div className="rounded-xl bg-primary/5 p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {t('Ready to Book?', 'Pronto para Agendar?', '¿Listo para Agendar?')}
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    {t(
                      'Skip the wait and book a consultation directly.',
                      'Pule a espera e agende uma consulta diretamente.',
                      'Omita la espera y agende una consulta directamente.'
                    )}
                  </p>
                  <Button asChild className="mt-4">
                    <Link to="/booking">{t('Book Now', 'Agende Agora', 'Agende Ahora')}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;