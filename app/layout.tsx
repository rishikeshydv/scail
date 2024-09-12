import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Footer } from "@/components/footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scail",
  description: "Revolutionizing Real Estate",
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
          {children}
          {/* <Footer /> */}
        </AntdRegistry>
      </body>
    </html>
  );
}
