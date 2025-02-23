"use client";

import { useEffect } from "react";
// import useLocale from "../../hooks/useLocale"
import { useRouter } from "next/navigation"
import Link from "next/link";

export default function Home() {
  // const lang = useLocale()
  const router = useRouter()


  useEffect(() => {
    const browserLanguage = window.navigator.language.split('-')[0]
    const supportedLanguages = ['fr', 'en']
    const defaultLanguage = 'en'

    const redirectLanguage = supportedLanguages.includes(browserLanguage)
    ? browserLanguage
    : defaultLanguage;

    router.push(`/${redirectLanguage}`);
  }, [])
  
  return (
    <p>If you are not redirected automatically, <Link href="/fr">click here</Link>.</p>
  );
}
