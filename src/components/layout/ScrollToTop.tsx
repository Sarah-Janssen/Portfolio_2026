import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Utility component die ervoor zorgt dat de pagina naar boven scrollt
 * bij elke routewijziging. Essentieel voor een Single Page Application.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
