"use client";

import { useMemo } from "react";
import { useParams, usePathname } from "next/navigation";

type Language = "en" | "fr";

const fallbackLanguage = "en";
const languages: Language[] = [fallbackLanguage, "fr"];

export default function useLocale(): Language {
  const params = useParams();
  const pathname = usePathname();

  const localeFromParams = useMemo(() => {
    return params?.lang as Language | undefined;
  }, [params?.lang]);

  const localeFromPathname = useMemo(() => {
    return pathname?.split?.("/")?.[1] as Language | undefined;
  }, [pathname]);

  const finalLocale = useMemo(() => {
    const decision = localeFromParams ?? localeFromPathname;
    if (!!decision && languages.includes(decision)) return decision;
    return fallbackLanguage;
  }, [localeFromParams, localeFromPathname]);

  return finalLocale;
}