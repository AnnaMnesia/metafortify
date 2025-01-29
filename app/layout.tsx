import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  title: "Metafortify",
  description:
    "Metafortify: The only storage you'll ever need. Secure, seamless, and built to keep your files safe and accessible anytime, anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
