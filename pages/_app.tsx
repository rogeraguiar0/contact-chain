import type { AppProps } from "next/app";
import Head from "next/head";

import { AuthProvider } from "../src/contexts/authContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Contact Chain</title>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
