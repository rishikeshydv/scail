import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scail",
  description: "Revolutionizing real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <AntdRegistry>
          <Navbar />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
