import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {t('Oops! Page not found', 'Ops! Página não encontrada', '¡Ups! Página no encontrada')}
        </p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          {t('Return to Home', 'Voltar para o Início', 'Volver al Inicio')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;