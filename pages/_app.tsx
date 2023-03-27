import type { AppProps } from "next/app";
import Head from "next/head";

import { AuthProvider } from "../src/contexts/authContext";
import { GlobalStyles } from "../src/styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <title>Contact Chain</title>
      </Head>
      <AuthProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
