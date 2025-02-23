import { Header, ContactPage } from '@/components'
import { Red_Hat_Display, Baskervville } from 'next/font/google'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

import "./globals.scss";

const baskerville = Baskervville({
  subsets: ['latin'],
  weight: "400",
  style: "normal",
  variable: '--font-title',
})

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  display: 'swap',
})

export async function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'en' }]
}

const files = {
  en: () => import('./../../data/en/partials.json').then((module) => module.default),
  fr: () => import('./../../data/fr/partials.json').then((module) => module.default),
}
const getData = async (locale: 'fr' | 'en') => files[locale]()

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: 'fr' | 'en' }>,
}>) {

  const lang = (await params).lang
  const data = await getData(lang)
  
  return (
    <html lang={lang} className={`${redHatDisplay.className} ${baskerville.variable}`}>
      <GoogleTagManager gtmId="GTM-K7WRZ544" />
      <GoogleAnalytics gaId="G-X059RCNVWB" />
      <body>
        <Header header={data.header} locale={lang} />
        {children}
        <footer className="footer">
          <ContactPage footer={data?.footer} />
        </footer>
      </body>
    </html>
  );
}