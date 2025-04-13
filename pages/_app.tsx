import { ThirdwebProvider } from "thirdweb/react";
import { client } from "../thirdweb";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider client={client}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
