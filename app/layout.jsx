import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GeistSans } from "geist/font/sans"
import { portfolioContent } from "@/lib/portfolio-content"

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://samimreza.vercel.app"),
  title: portfolioContent.seo.title,
  description: portfolioContent.seo.description,
  keywords: portfolioContent.seo.keywords,
  authors: [{ name: portfolioContent.brand.name }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
  openGraph: {
    title: portfolioContent.seo.openGraphTitle,
    description: portfolioContent.seo.openGraphDescription,
    type: "website",
    url: "https://samimreza.vercel.app",
    siteName: "Md Samim Reza Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Md Samim Reza — Associate Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioContent.seo.openGraphTitle,
    description: portfolioContent.seo.openGraphDescription,
    images: ["/profile.jpg"],
  },
}

export const viewport = {
  themeColor: "#0b0f19",
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md Samim Reza",
  jobTitle: "Associate Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Canada Life",
  },
  almaMater: {
    "@type": "EducationalOrganization",
    name: "Siddaganga Institute of Technology",
  },
  sameAs: [
    "https://github.com/mdsamimrrza",
    "https://linkedin.com/in/samimrrza",
    "https://leetcode.com/samimreza",
  ],
  knowsAbout: [
    "Software Engineering",
    "Spring Boot",
    "Java",
    ".NET",
    "React",
    "SQL",
    "Full Stack Development",
    "REST APIs",
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${GeistSans.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
