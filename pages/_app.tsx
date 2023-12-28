import Theme from "@/hooks/theme";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme defaultTheme="dark">
      <Component {...pageProps} />
    </Theme>
  );
}
