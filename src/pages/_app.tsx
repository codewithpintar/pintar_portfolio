// pages/_app.tsx
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Cursore from "@/components/elements/cursore";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cursore />
      <Component {...pageProps} />
    </>
  );
}
