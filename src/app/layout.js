import { Inter } from "next/font/google";


import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lines from "@/components/Lines";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Opsight.AI",
  description: "Opsight AI Pvt Ltd is a Manufacturing Analytics (Industrial-AI, SAAS) Startup. Manufacturing generates the largest volume of data amongst all sectors, which often remains siloed in shop floors & seldom used. At Opsight AI, we seek to revolutionise the way manufacturing companies use data to make smarter decisions, optimise operations & improve their overall efficiency.",
  icon: "/favicon.ico"
};

const RootLayout = ({ children }) => {

  return (
    <html lang="en">
      <head>
        {/* Add head elements here */}
      </head>
      <body className={inter.className}>
        <Lines />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
