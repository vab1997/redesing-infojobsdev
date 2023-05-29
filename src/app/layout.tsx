import './globals.css'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const title = 'Infojobs Developer Site'
const URL_WEB = 'https://infojobsDev.vercel.app'

export const metadata = {
  title,
  description: 'API documentation for InfoJobs Developers',
  twitter: {
    card: 'summary_large_image',
    site: '@victorbejas',
    creator: '@victorbejas',
    title,
    domain: 'http://twitter.com/victorbejas'
  },
  openGraph: {
    title,
    description: 'API documentation for InfoJobs Developers',
    url: `${URL_WEB}`,
    siteName: title,
    images: [
      {
        url: `${URL_WEB}/og.webp`,
        width: 1200,
        height: 630
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
