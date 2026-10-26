import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { CartProvider } from "./components/cart/CartContext";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "MERGE | The World of Chocolate, Connected",
  description:
    "MERGE is a knowledge platform dedicated to discovering chocolate, learning about cocoa science, and exploring innovations shaping the chocolate industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-white text-neutral-800 antialiased`}
      >
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
