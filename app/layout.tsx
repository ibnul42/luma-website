import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luma",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased h-screen overflow-y-auto bg-black flex flex-col text-white`}
      >
        <ClientLayout>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
