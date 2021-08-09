import { AppProps } from "next/app";
import React from "react";
import { Header } from "../components/header";
import "../style/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
