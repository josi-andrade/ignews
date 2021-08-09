import { AppProps } from "next/app";
import React from "react";
import { Header } from "../components/header";
import { Provider as NextAuthProvider } from "next-auth/client";
import "../style/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
