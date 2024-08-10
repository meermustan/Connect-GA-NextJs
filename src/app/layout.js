"use client";
import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WYTFXXXXXX"></Script>
      <Script id='google-analytics'>
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WYTFXXXXXX', {
              page_path: window.location.pathname,
            });
          `
        }
      </Script>
    </html>
  );
}
