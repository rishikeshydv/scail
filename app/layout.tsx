import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

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
      <body className={`${urbanist.className} overflow-x-hidden`} suppressHydrationWarning={true}>
        <AntdRegistry>
          {children}
          <Toaster />
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
