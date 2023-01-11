import type { AppProps } from "next/app";
import "../styles/styles.scss";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";

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
      <DefaultSeo
        title="Agustin Ietta Portfolio's"
        description="My portfolio web"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://portfolio-agus.vercel.app/",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        canonical="https://portfolio-agus.vercel.app/"
      />
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
    </>
  );
}
