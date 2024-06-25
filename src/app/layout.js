import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navbar/Nav";
import Footer from "@/components/Footer/Footer";
import Cursor from "@/elements/Cursor/Cursor";

const montserrat = Montserrat({ subsets: ["latin"] , 
  weight: ['100' , '400' , '500' , '600' , '700']
});

export const metadata = {
  title: "Fares Ibrahim Portfolio",
  description: "Front-End js devolper reactjs redux Nextjs",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Cursor />
        <Nav/>
        <div className="container">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
