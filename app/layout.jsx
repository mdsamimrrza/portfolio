import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GeistSans } from "geist/font/sans"
import { portfolioContent } from "@/lib/portfolio-content"

export const metadata = {
  title: portfolioContent.seo.title,
  description: portfolioContent.seo.description,
  keywords: portfolioContent.seo.keywords,
  authors: [{ name: portfolioContent.brand.name }],
  openGraph: {
    title: portfolioContent.seo.openGraphTitle,
    description: portfolioContent.seo.openGraphDescription,
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
