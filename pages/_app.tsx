import { motion, AnimatePresence } from "framer-motion";
import "../styles/styles.scss";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 125,
    when: "afterChildren",
  };
  return (
    <>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div
          transition={spring}
          key={router.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <Component {...pageProps} key={router.pathname} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}
