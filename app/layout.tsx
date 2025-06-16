import { ThemeProvider } from '@/components/ui/theme-provider';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/sonner"


export const metadata: Metadata = {
  metadataBase: new URL("https://www.astroui.xyz"),
  title: {
    default: 'AstroUI',
    template: `%s | AstroUI`
  },
  description: "A collection of components made with TailwindCSS and Shadcn UI",
  openGraph: {
    description: "A collection of components made with TailwindCSS and Shadcn UI",
    images: ['https://76czsvtte3.ufs.sh/f/koRwEFlaRNkeo9i6qxnCPV2aRnH4GKOscbEhfz0Z6AlJ9dM8'],
    url: 'https://www.astroui.xyz/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AstroUI',
    description: 'A collection of components made with TailwindCSS and Shadcn UI',
    siteId: "",
    creator: "@uiastro",
    creatorId: "",
    images: ['https://76czsvtte3.ufs.sh/f/koRwEFlaRNkeo9i6qxnCPV2aRnH4GKOscbEhfz0Z6AlJ9dM8'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" 
    className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
