// pages/_app.js
import { ClerkProvider } from "@clerk/clerk-react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
