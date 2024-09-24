import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";


export const metadata: Metadata = {
  title: "Animatics",
  description: "A simple animation library ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
    return (
      <html lang="en">
        <body
          className={cn(
            "relative flex min-h-screen flex-col bg-background font-sans antialiased",
          )}
        >
          
            <Navbar />
            <main className="flex-1">
              <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 lg:max-w-[1700px]">
                <Sidebar />
                {/* <Separator orientation="vertical" /> */}
                {/* <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]"> */}
                  <div className="mx-auto w-full min-w-0">
                    {children}
                  </div>
                {/* </main> */}
              </div>
            </main>
      
        </body>
      </html>
    );
}
