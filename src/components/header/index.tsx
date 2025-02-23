"use client";

import Link from 'next/link'
import './header.scss'
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5";

import { useState, useEffect } from 'react';
// import { LuInstagram } from "react-icons/lu";

import clsx from 'clsx'

type Props = {
  header?: {
    items?: {
      label: string;
      url: string;
      slug: string;
    }[]
  };
  locale: string;
}

export default function Header({ header, locale }: Props) {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll(".anchor-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% de visibilité pour considérer une section "active"
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    }
  }, [])

  return (
    <header className="header inside">
        <div className="flex justify-space">
        <Link href={`/${locale}`} className="logo">Dimitri Bertin</Link>
        <div className='header-right gap-m'>
            <button type="button" className='nav-btn' onClick={() => setOpen(!open)}>
              {open ? (
                <IoClose size={ 18 } />
              ) : (
                <FiMenu size={ 18 } />
              )}
            </button>
          <nav className={clsx('gap-m header-nav nav', open && 'is-open')}>
            {header?.items && header.items.map((item, index) => (
              <Link href={item.url} className={clsx('nav-item link-after', active === item.slug && 'is-active')} key={`menu-item-${index}`}>{item.label}</Link>
            ))}
          </nav>
          <div className='lang'>
            <Link href="/fr" className={clsx(locale === 'fr' && 'is-active', 'lang-item')}>FR</Link>
            <span className='lang-middle'></span>
            <Link href="/en" className={clsx(locale === 'en' && 'is-active', 'lang-item')} >EN</Link>
          </div>
        </div>
      </div>
    </header>
  )
}