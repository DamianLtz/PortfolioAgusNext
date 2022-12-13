import React, { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToTop = () => {
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const scrollToContact = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  e.preventDefault();
  return window.scrollTo(0, 10000);
};

const scrollTop = () => {
  window.scrollTo(0, 1000);
};

export { scrollToContact, scrollTop, ScrollToTop };
