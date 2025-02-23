import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html>
      <GoogleTagManager gtmId="GTM-K7WRZ544" />
      <GoogleAnalytics gaId="G-X059RCNVWB" />
      <body>
        {children}
      </body>
    </html>
  );
}

