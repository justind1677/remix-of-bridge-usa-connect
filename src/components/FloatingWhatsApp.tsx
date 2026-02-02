import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingWhatsApp = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      <div className="hidden sm:block rounded-lg bg-card border border-border px-3 py-2 shadow-lg text-sm text-muted-foreground max-w-[200px] text-right">
        {t(
          'Questions? Chat after booking',
          'Dúvidas? Converse após agendar',
          '¿Preguntas? Chatea después de agendar'
        )}
      </div>
      
      {/* Button */}
      <a
        href="https://wa.me/12242548014"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="font-medium">WhatsApp</span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
