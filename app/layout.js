import "./globals.css";
import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: "MERGE Chocolate",
  description: "Premium Luxury Chocolate Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        
        {/* NAVBAR (fixed glassmorphism header) */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="pt-20">
          {children}
        </main>

      </body>
    </html>
  );
}