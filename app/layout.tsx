import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import { getLocale } from 'next-intl/server';
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carvex cucine",
  description: "Carvex cucine Castel Focognano",
};


export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`${montserrat.variable} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
