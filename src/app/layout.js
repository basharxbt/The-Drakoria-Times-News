import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// const UnifrakturCook = UnifrakturCook({
//   variable: "--font-unifraktur-cook",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Drakoria Times",
  description: "Your source for the latest news in Drakoria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
