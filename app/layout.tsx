import { ThemeProvider } from '@/components/ui/theme-provider';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/sonner"
import { ConsentManagerProvider, CookieBanner, ConsentManagerDialog } from "@c15t/nextjs";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.astroui.xyz"),
  title: {
    default: 'AstroUI',
    template: `%s | AstroUI`
  },
  description: "A collection of components made with TailwindCSS and Shadcn UI",
  openGraph: {
    description: "A collection of components made with TailwindCSS and Shadcn UI",
    images: [
      {
        url: "/astroui.jpg",
        alt: "Astro UI",
      },
    ],
    url: 'https://www.astroui.xyz/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AstroUI',
    description: 'A collection of components made with TailwindCSS and Shadcn UI',
    siteId: "",
    creator: "@uiastro",
    creatorId: "",
    images: [
      {
        url: "/astroui.jpg",
        alt: "Astro UI",
      },
    ],
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
    		<ConsentManagerProvider options={{
    					mode: 'c15t',
    					backendURL: '/api/c15t',
    					consentCategories: ['necessary', 'marketing'], // Optional: Specify which consent categories to show in the banner. 
    					ignoreGeoLocation: true, // Useful for development to always view the banner.
    				}}>
    			<CookieBanner />
    			<ConsentManagerDialog />
    			
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
          
    		</ConsentManagerProvider>
    	</body>
        </html>
      )
}
